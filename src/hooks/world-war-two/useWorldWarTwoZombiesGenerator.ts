// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { scrollToTop } from '@/helpers/scrollToTop';
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
import { ZombiesGeneratorData, GeneratorStatus, Weapon } from '@/types/Generator';
// --- Data ---
import defaultData from '@/data/cod/default-zombies-generator-info.json';

const fetchNewWw2ZombiesLoadout = () => {
  const game = 'world-war-two-zombies';
  const randClassName = fetchClassName();
  const weapons = { primary: { ...fetchWeapon('primary', game), attachments: '' } };
  const lethal = fetchEquipment('lethal', 'world-war-two').name;
  const special = fetchEquipment('field_upgrade', game).name;
  const character = fetchZombiesCharacter(game).name;
  const zombieMap = fetchZombiesMap(game);
  // Mods depend on the selected special
  const mods = fetchZombiesPerks(`${game}-${special.toLowerCase()}`, 3);

  return { ...defaultData, randClassName, weapons, lethal, special, character, zombieMap, mods };
};

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

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewWw2ZombiesLoadout();
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
