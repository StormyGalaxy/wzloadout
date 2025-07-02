// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// --- WaW Specific Helpers ---
import { fetchAttachments } from '@/helpers/generator/world-at-war/fetchAttachments';
import { fetchPerk } from '@/helpers/generator/world-at-war/fetchPerk';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { GeneratorData, GeneratorStatus, PerkObject } from '@/types/Generator';
// --- Data ---
import defaultData from '@/data/cod/default-generator-info.json';

const fetchNewWawLoadout = (): GeneratorData => {
  const game = 'world-at-war';
  const randClassName = fetchClassName();
  const perkObj: PerkObject = {
    perk1: fetchPerk('perk1'),
    perk2: fetchPerk('perk2'),
    perk3: fetchPerk('perk3'),
    vehiclePerk: fetchPerk('vehicle-perk'),
  };

  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
  };

  const primaryWeapon = fetchWeapon('primary', game);
  let secondaryWeapon = fetchWeapon('secondary', game);

  if (perkObj.perk2 === 'Overkill') {
    secondaryWeapon = fetchWeapon('primary', game, primaryWeapon.name);
  }

  const weapons = {
    primary: { ...primaryWeapon, attachments: implodeObject(fetchAttachments(primaryWeapon, 1)) },
    secondary: {
      ...secondaryWeapon,
      attachments: '', // WaW sidearms don't have attachments
    },
  };

  return { ...defaultData, randClassName, perkObj, weapons, equipment };
};

export const useWorldAtWarGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'waw_fetchLoadoutData',
      label: 'WorldAtWarLoadout',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewWawLoadout();
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
