'use client';

import { useEffect, useState, useCallback } from 'react';
// Helpers
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// Zombies Specific
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
// Utils
import { sendEvent } from '@silocitypages/utils';
// json
import defaultData from '@/json/cod/default-zombies-generator-info.json';
import { Weapon, ZombiesMap } from '@/types/Generator';

export const useColdWarZombiesLoadout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(true);
  const [data, setData] = useState(defaultData);

  const fetchLoadoutData = useCallback(async () => {
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
          ammoMod: '',
        },
      };

      const field_upgrade = fetchEquipment('field_upgrade', game).name;
      const zombieMap = {
        ...fetchedZombieMap,
        mode: fetchedZombieMap.mode ?? '',
        difficulty: fetchedZombieMap.difficulty ?? '',
      };

      setData({ ...data, randClassName, weapons, field_upgrade, zombieMap });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred.');
      }
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      await fetchLoadoutData();
      setIsGenerating(false);
      setIsLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  const regenerateLoadout = async () => {
    setIsGenerating(true);
    setTimeout(async () => {
      await fetchLoadoutData();
      setIsGenerating(false);
      scrollToTop();
    }, 1000);
  };

  return { isLoading, isGenerating, data, regenerateLoadout };
};
