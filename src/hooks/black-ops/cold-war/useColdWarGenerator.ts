// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchStreaks } from '@/helpers/fetch/fetchStreaks';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { fetchWildcard } from '@/helpers/fetch/fetchWildcard';
// Cold War Specific Helpers
import { fetchPerk } from '@/helpers/generator/black-ops/cold-war/fetchPerk';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { GeneratorData, Weapon, GeneratorStatus } from '@/types/Generator';
// --- Data ---
import defaultData from '@/json/cod/default-generator-info.json';

export const useColdWarGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback(async (isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'coldWar_generateLoadout',
      label: 'ColdWar',
      category: 'COD_Loadouts',
    });

    try {
      const game = 'cold-war';
      const randClassName = fetchClassName();
      const wildcard = fetchWildcard(game);
      const isGreed = wildcard.name === 'Perk Greed';
      const isLawBreaker = wildcard.name === 'Law Breaker';
      const primAttachCount = wildcard.name === 'Gunfighter' ? 8 : 5;

      // --- Perks ---
      let perk1, perk2, perk3;
      if (isLawBreaker) {
        perk1 = fetchPerk('all');
        perk2 = fetchPerk('all', perk1);
        perk3 = fetchPerk('all', [perk1, perk2]);
      } else {
        perk1 = fetchPerk('perk1');
        perk2 = fetchPerk('perk2');
        perk3 = fetchPerk('perk3');
      }
      const initialPerks = { perk1, perk2, perk3 };
      const perkGreed = {
        perk1Greed: isGreed ? fetchPerk('perk1', initialPerks.perk1) : '',
        perk2Greed: isGreed ? fetchPerk('perk2', initialPerks.perk2) : '',
        perk3Greed: isGreed ? fetchPerk('perk3', initialPerks.perk3) : '',
      };
      const perkObj = { ...initialPerks, ...perkGreed };

      // --- Weapons ---
      const weapons: { primary: Weapon; secondary: Weapon } = {
        primary: { ...fetchWeapon('primary', game), attachments: '' },
        secondary: { ...fetchWeapon('secondary', game), attachments: '' },
      };

      if (isLawBreaker) {
        weapons.primary = { ...fetchWeapon('all', game), attachments: '' };
        weapons.secondary = { ...fetchWeapon('all', game, weapons.primary.name), attachments: '' };
      }

      if (!weapons.primary?.no_attach) {
        weapons.primary.attachments = implodeObject(
          fetchAttachments(weapons.primary, primAttachCount)
        );
      }
      if (!weapons.secondary?.no_attach) {
        weapons.secondary.attachments = implodeObject(fetchAttachments(weapons.secondary));
      }

      // --- Equipment ---
      const equipment = {
        tactical: fetchEquipment('tactical', game),
        lethal: fetchEquipment('lethal', game),
        fieldUpgrade: fetchEquipment('field_upgrade', game),
      };
      equipment.tactical.name += wildcard.name == 'Danger Close' ? ' x2' : '';
      equipment.lethal.name += wildcard.name == 'Danger Close' ? ' x2' : '';

      // --- Streaks ---
      const streaks = fetchStreaks(game);

      // A brief timeout to give the feeling of generation
      await new Promise((resolve) => setTimeout(resolve, 500));

      setData({ ...data, randClassName, perkObj, streaks, weapons, equipment, wildcard });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred.');
      }
      setStatus('idle');
    } finally {
      setTimeout(() => {
        setStatus('idle');
      }, 500);
    }
  }, []);

  useEffect(() => {
    generateLoadout(true);
  }, [generateLoadout]);

  return {
    data,
    status,
    isLoading: status === 'loading',
    isGenerating: status === 'generating',
    generateLoadout,
  };
};
