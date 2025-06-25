'use client';

import { useEffect, useState, useCallback } from 'react';
// Helpers
import { implodeObject } from '@/helpers/implodeObject';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// Zombies Specific
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
// Utils
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { Weapon, ZombiesMap, GeneratorStatus, ZombiesGeneratorData } from '@/types/Generator';
// --- Data ---
import defaultData from '@/json/cod/default-zombies-generator-info.json';

export const useColdWarZombiesLoadout = () => {
  const [data, setData] = useState<ZombiesGeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback(async (isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'coldWarZombies_fetchLoadoutData',
      label: 'ColdWarZombies',
      category: 'COD_Loadouts',
    });

    try {
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
          ammoMod: '', // You might want to implement fetchZombiesAmmoMod() here
        },
      };

      const field_upgrade = fetchEquipment('field_upgrade', game).name;
      const zombieMap = {
        ...fetchedZombieMap,
        mode: fetchedZombieMap.mode ?? '',
        difficulty: fetchedZombieMap.difficulty ?? '',
      };

      // A brief timeout to give the feeling of generation
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData({ ...defaultData, randClassName, weapons, field_upgrade, zombieMap });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred.');
      }
      setStatus('idle'); // Reset status on error
    } finally {
      // Use a timeout to give a feeling of generation before setting to idle
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
