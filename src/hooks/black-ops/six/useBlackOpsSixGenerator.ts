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
import { fetchWildcard } from '@/helpers/fetch/fetchWildcard';
// --- Types ---
import { GeneratorData, GeneratorStatus, Weapon } from '@/types/Generator';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/data/cod/default-generator-info.json';

const fetchNewBo6Loadout = (): GeneratorData => {
  const game = 'black-ops-six';
  const randClassName = fetchClassName();
  const wildcard = fetchWildcard(game);

  const primAttachCount = wildcard.name === 'Gunfighter' ? 8 : 5;
  const isPerkGreed = wildcard.name === 'Perk Greed';
  const isHighRoller = wildcard.name === 'High Roller';

  const perks = fetchPerks(game, isPerkGreed);
  const streaks = fetchStreaks(game, isHighRoller);

  const primaryWeapon = fetchWeapon('primary', game);
  let secondaryWeapon = fetchWeapon('secondary', game);

  if (wildcard.name === 'Overkill') {
    secondaryWeapon = fetchWeapon('primary', game, primaryWeapon.name);
  }

  const weapons = {
    primary: {
      ...primaryWeapon,
      attachments: !primaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(primaryWeapon, primAttachCount))
        : '',
    },
    secondary: {
      ...secondaryWeapon,
      attachments: !secondaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(secondaryWeapon))
        : '',
    },
    melee: fetchWeapon('melee', game),
  };

  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
    fieldUpgrade2: { name: '', type: '', game: '' },
  };

  if (wildcard.name === 'Prepper') {
    let fieldUpgrade2;
    do {
      fieldUpgrade2 = fetchEquipment('field_upgrade', game);
    } while (equipment.fieldUpgrade.name === fieldUpgrade2.name);
    equipment.fieldUpgrade2 = fieldUpgrade2;
  }

  return { ...defaultData, randClassName, weapons, equipment, wildcard, perks, streaks };
};

export const useBlackOpsSixGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'bo6_fetchLoadoutData',
      label: 'BlackOpsSix',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewBo6Loadout();
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
