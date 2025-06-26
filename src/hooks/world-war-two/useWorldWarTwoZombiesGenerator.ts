// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// --- Zombies Helpers ---
import { fetchZombiesCharacter } from '@/helpers/fetch/zombies/fetchZombiesCharacter';
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
import { fetchZombiesPerks } from '@/helpers/fetch/zombies/fetchZombiesPerks';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { ZombiesGeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Data ---
import defaultData from '@/json/cod/default-zombies-generator-info.json';

export const useWorldWarTwoZombiesGenerator = () => {
  const [data, setData] = useState<ZombiesGeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback(async (isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'ww2Zombies_generateLoadout',
      label: 'WorldWarTwoZombies',
      category: 'COD_Loadouts',
    });

    try {
      const game = 'world-war-two-zombies';
      const randClassName = fetchClassName();
      const weapons = { primary: { ...fetchWeapon('primary', game), attachments: '' } };
      const lethal = fetchEquipment('lethal', 'world-war-two').name;
      const special = fetchEquipment('field_upgrade', game).name;
      const character = fetchZombiesCharacter(game).name;
      const zombieMap = fetchZombiesMap(game);
      // Mods depend on the selected special
      const mods = fetchZombiesPerks(`${game}-${special.toLowerCase()}`, 3);

      // A brief timeout to give the feeling of generation
      await new Promise((resolve) => setTimeout(resolve, 500));

      setData({ ...data, randClassName, weapons, lethal, special, character, zombieMap, mods });
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
