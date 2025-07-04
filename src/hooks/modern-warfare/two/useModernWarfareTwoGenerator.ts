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
//MW2 Specific
import { fetchPerks } from '@/helpers/generator/modern-warfare/two/fetchPerks';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { GeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Data ---
import defaultData from '@/data/cod/default-generator-info.json';

const fetchNewMW2Loadout = (): GeneratorData => {
  const game = 'modern-warfare-two';
  const hasFieldUpgrade2 = Math.random() < 0.35;
  const randClassName = fetchClassName();
  const streaks = fetchStreaks(game);
  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
    fieldUpgrade2: { name: '', type: '', game: '' },
  };

  if (hasFieldUpgrade2) {
    //Loop to make sure we don't get the same field upgrade
    while (true) {
      equipment.fieldUpgrade2 = fetchEquipment('field_upgrade', game);

      if (equipment.fieldUpgrade.name !== equipment.fieldUpgrade2.name) {
        break;
      }
    }
  }

  const perks = fetchPerks();

  const weapons = {
    primary: { ...fetchWeapon('primary', game), attachments: '' },
    secondary: { ...fetchWeapon('secondary', game), attachments: '' },
  };

  //Check for overkill
  if (perks.includes('Overkill')) {
    weapons.secondary = { ...fetchWeapon('primary', game, weapons.primary.name), attachments: '' };
  }

  weapons.primary.attachments = implodeObject(fetchAttachments(weapons.primary));

  //Verify if secondary weapon has attachments
  if (!weapons.secondary?.no_attach) {
    weapons.secondary.attachments = implodeObject(fetchAttachments(weapons.secondary));
  }

  return { ...defaultData, randClassName, perks, streaks, weapons, equipment };
};

export const useModernWarfareTwoGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'mw2_fetchLoadoutData',
      label: 'ModernWarfareTwo',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewMW2Loadout();
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
    isLoading: status === 'loading',
    isGenerating: status === 'generating',
    generateLoadout,
  };
};
