// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { fetchPerks } from '@/helpers/fetch/fetchPerks';
import { fetchStreaks } from '@/helpers/fetch/fetchStreaks';
// --- Types ---
import { GeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/json/cod/default-generator-info.json';

const fetchNewVanguardLoadout = (): GeneratorData => {
  const game = 'vanguard';
  const randClassName = fetchClassName();
  const perks = fetchPerks(game);
  const streaks = fetchStreaks(game);

  const primaryWeapon = fetchWeapon('primary', game);
  let secondaryWeapon = fetchWeapon('secondary', game);

  if (perks.includes('Overkill')) {
    secondaryWeapon = fetchWeapon('primary', game, primaryWeapon.name);
  }

  const weapons = {
    primary: {
      ...primaryWeapon,
      attachments: !primaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(primaryWeapon, 100))
        : '',
    },
    secondary: {
      ...secondaryWeapon,
      attachments: !secondaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(secondaryWeapon, 100))
        : '',
    },
  };

  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
  };

  return { ...defaultData, randClassName, weapons, equipment, perks, streaks };
};

export const useVanguardGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'vanguard_fetchLoadoutData',
      label: 'Vanguard',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewVanguardLoadout();
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
