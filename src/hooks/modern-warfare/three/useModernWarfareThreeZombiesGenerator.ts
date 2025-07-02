// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// --- Types ---
import { GeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/data/cod/default-zombies-generator-info.json';

const fetchNewMw3ZombiesLoadout = (): GeneratorData => {
  sendEvent('button_click', {
    button_id: 'mw3Zombies_fetchLoadoutData',
    label: 'ModernWarfareThreeZombies',
    category: 'COD_Loadouts',
  });

  const game = 'modern-warfare-three-zombies';
  const randClassName = fetchClassName();
  const primaryWeapon = fetchWeapon('all', 'modern-warfare-three');
  const secondaryWeapon = fetchWeapon('all', 'modern-warfare-three', primaryWeapon.name);

  const weapons = {
    primary: {
      ...primaryWeapon,
      attachments: !primaryWeapon.no_attach ? implodeObject(fetchAttachments(primaryWeapon)) : '',
    },
    secondary: {
      ...secondaryWeapon,
      attachments: !secondaryWeapon.no_attach
        ? implodeObject(fetchAttachments(secondaryWeapon))
        : '',
    },
  };

  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
  };

  return { ...defaultData, randClassName, weapons, equipment };
};

export const useModernWarfareThreeZombiesGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewMw3ZombiesLoadout();
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
