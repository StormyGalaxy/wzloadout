// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
//MWR Specific
import { fetchAttachments } from '@/helpers/generator/modern-warfare/remastered/fetchAttachments';
import { fetchPerk } from '@/helpers/generator/modern-warfare/remastered/fetchPerk';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { GeneratorData, GeneratorStatus } from '@/types/Generator';
// --- Data ---
import defaultData from '@/json/cod/default-generator-info.json';

const fetchNewMWRLoadout = (): GeneratorData => {
  const game = 'modern-warfare-remastered';
  const randClassName = fetchClassName();
  const perkObj = {
    perk1: fetchPerk('perk1'),
    perk2: fetchPerk('perk2'),
    perk3: fetchPerk('perk3'),
  };
  const equipment = { tactical: fetchEquipment('tactical', game) };

  const weapons = {
    primary: { ...fetchWeapon('primary', game), attachments: '' },
    secondary: { ...fetchWeapon('secondary', game), attachments: '' },
    melee: fetchWeapon('melee', game),
  };

  weapons.primary.attachments = implodeObject(fetchAttachments(weapons.primary, 1));

  if (perkObj.perk2 === 'Overkill') {
    weapons.secondary = { ...fetchWeapon('primary', game, weapons.primary.name), attachments: '' };
  }

  //Verify if secondary weapon has attachments
  if (!weapons.secondary?.no_attach) {
    weapons.secondary.attachments = implodeObject(fetchAttachments(weapons.secondary, 1));
  }

  return { ...defaultData, randClassName, perkObj, weapons, equipment };
};

export const useModernWarfareRemasteredGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'mwr_fetchLoadoutData',
      label: 'ModernWarfareRemastered',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewMWRLoadout();
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
