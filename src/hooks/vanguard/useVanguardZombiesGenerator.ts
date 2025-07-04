// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
// --- Types ---
import { ZombiesGeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/data/cod/default-zombies-generator-info.json';

const fetchNewVanguardZombiesLoadout = (): ZombiesGeneratorData => {
  const game = 'vanguard-zombies';
  const randClassName = fetchClassName();
  const primaryWeapon = fetchWeapon('all', 'vanguard');
  const weapons = {
    primary: {
      ...primaryWeapon,
      attachments: !primaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(primaryWeapon, 8))
        : '',
    },
  };
  const artifact = fetchEquipment('field_upgrade', game);
  const zombieMap = fetchZombiesMap(game);

  return { ...defaultData, randClassName, weapons, artifact, zombieMap };
};

export const useVanguardZombiesGenerator = () => {
  const [data, setData] = useState<ZombiesGeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'vanguardZombies_fetchLoadoutData',
      label: 'VanguardZombies',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewVanguardZombiesLoadout();
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
