// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { fetchStreaks } from '@/helpers/fetch/fetchStreaks';
//MW3 Specific
import { fetchPerks } from '@/helpers/generator/modern-warfare/three/fetchPerks';
// --- Types ---
import { GeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/json/cod/default-generator-info.json';

const fetchNewMw3Loadout = (): GeneratorData => {
  sendEvent('button_click', {
    button_id: 'mw3_fetchLoadoutData',
    label: 'ModernWarfareThree',
    category: 'COD_Loadouts',
  });

  const game = 'modern-warfare-three';
  const randClassName = fetchClassName();
  let allowGear2 = true;
  let primaryType = 'primary';
  let secondaryType = 'secondary';
  const streaks = fetchStreaks(game);
  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
    vest: fetchEquipment('vest', game),
  };

  //Vest Validation
  const vestEffects = {
    'Gunner Vest': () => {
      allowGear2 = false;
      secondaryType = 'primary';
    },
    'CCT Comms Vest': () => {
      equipment.lethal = { name: '', type: '', game: '' };
    },
    'Ninja Vest': () => {
      allowGear2 = false;
    },
    'Assassin Vest': () => {
      allowGear2 = false;
    },
    'Overkill Vest': () => {
      allowGear2 = false;
      primaryType = 'all';
      secondaryType = 'all';
    },
    'Gunslinger Vest': () => {
      primaryType = 'secondary';
      secondaryType = 'secondary';
    },
    'Compression Carrier': () => {
      allowGear2 = false;
      equipment.fieldUpgrade = { name: '', type: '', game: '' };
    },
  };

  if (vestEffects[equipment.vest.name]) {
    vestEffects[equipment.vest.name]();
  }

  const perks = fetchPerks(allowGear2);

  const primaryWeapon = fetchWeapon(primaryType, game);
  const secondaryWeapon = fetchWeapon(secondaryType, game);

  const weapons = {
    primary: { ...primaryWeapon, attachments: implodeObject(fetchAttachments(primaryWeapon)) },
    secondary: {
      ...secondaryWeapon,
      attachments: !secondaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(secondaryWeapon))
        : '',
    },
  };

  return { ...defaultData, randClassName, perks, streaks, weapons, equipment };
};

export const useModernWarfareThreeGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewMw3Loadout();
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
