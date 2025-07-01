// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// --- Zombies Specific ---
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { Weapon, ZombiesMap, GeneratorStatus, ZombiesGeneratorData } from '@/types/Generator';
// --- Data ---
import defaultData from '@/json/cod/default-zombies-generator-info.json';

// This function contains the core generation logic and is defined outside the hook
// so that it doesn't get recreated on every render and cause dependency issues.
const fetchNewColdWarZombiesLoadout = (): ZombiesGeneratorData => {
  const game = 'cold-war-zombies';
  const randClassName = fetchClassName();
  const primaryWeaponData: Weapon = fetchWeapon('all', 'cold-war');
  const fetchedZombieMap: ZombiesMap = fetchZombiesMap(game);

  const weapons = {
    ...defaultData.weapons,
    primary: {
      ...primaryWeaponData,
      no_attach: primaryWeaponData.no_attach ?? false,
      attachments: !primaryWeaponData.no_attach
        ? implodeObject(fetchAttachments(primaryWeaponData, 8))
        : '',
      ammoMod: '',
    },
  };

  const field_upgrade = fetchEquipment('field_upgrade', game).name;
  const zombieMap = {
    ...fetchedZombieMap,
    mode: fetchedZombieMap.mode ?? '',
    difficulty: fetchedZombieMap.difficulty ?? '',
  };

  return { ...defaultData, randClassName, weapons, field_upgrade, zombieMap };
};

export const useColdWarZombiesGenerator = () => {
  const [data, setData] = useState<ZombiesGeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'coldWarZombies_fetchLoadoutData',
      label: 'ColdWarZombies',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewColdWarZombiesLoadout();
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
