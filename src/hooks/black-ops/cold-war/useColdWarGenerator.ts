// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
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

// This function contains the core generation logic and is defined outside the hook
// so that it doesn't get recreated on every render and cause dependency issues.
const fetchNewColdWarLoadout = (): GeneratorData => {
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
  let primaryWeapon: Weapon;
  let secondaryWeapon: Weapon;

  if (isLawBreaker) {
    primaryWeapon = { ...fetchWeapon('all', game), attachments: '' };
    secondaryWeapon = { ...fetchWeapon('all', game, primaryWeapon.name), attachments: '' };
  } else {
    primaryWeapon = { ...fetchWeapon('primary', game), attachments: '' };
    secondaryWeapon = { ...fetchWeapon('secondary', game), attachments: '' };
  }

  if (!primaryWeapon?.no_attach) {
    primaryWeapon.attachments = implodeObject(fetchAttachments(primaryWeapon, primAttachCount));
  }
  if (!secondaryWeapon?.no_attach) {
    secondaryWeapon.attachments = implodeObject(fetchAttachments(secondaryWeapon));
  }

  const weapons = { primary: primaryWeapon, secondary: secondaryWeapon };

  // --- Equipment ---
  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
  };
  if (wildcard.name === 'Danger Close') {
    equipment.tactical.name += ' x2';
    equipment.lethal.name += ' x2';
  }

  // --- Streaks ---
  const streaks = fetchStreaks(game);

  return { ...defaultData, randClassName, perkObj, streaks, weapons, equipment, wildcard };
};

export const useColdWarGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'coldWar_generateLoadout',
      label: 'ColdWar',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewColdWarLoadout();
        setData(newLoadout);
      } catch (error) {
        console.error(error instanceof Error ? error.message : 'An unknown error occurred.');
      } finally {
        setStatus('idle');
        if (!isInitialLoad) {
          scrollToTop();
        }
      }
    }, 1000);
  }, []);

  useEffect(() => {
    generateLoadout(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    status,
    isLoading: status === 'loading',
    isGenerating: status === 'generating',
    generateLoadout,
  };
};
