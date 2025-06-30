// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchStreaks } from '@/helpers/fetch/fetchStreaks';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { fetchSpecialist } from '@/helpers/fetch/fetchSpecialist';
// --- BO3 Specific Helpers ---
import { fetchPerk } from '@/helpers/generator/black-ops/three/fetchPerk';
import { getBO3Attachments } from '@/helpers/generator/black-ops/three/getBO3Attachments';
import { getLoadoutFrame } from '@/helpers/generator/black-ops/three/frame/getLoadoutFrame';
// --- Types ---
import { GeneratorStatus, GeneratorData } from '@/types/Generator';
import { LoadoutFrame } from '@/types/BlackOps3';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/json/cod/default-generator-info.json';

const defaultWeapon = {
  name: '',
  type: '',
  game: '',
  no_attach: false,
  optic: '',
  attachments: '',
};

const fetchNewBo3Loadout = (): GeneratorData => {
  const loadoutFrame: LoadoutFrame = getLoadoutFrame();
  const game = 'black-ops-three';
  const randClassName = fetchClassName();

  const initialPerks = {
    perk1: loadoutFrame.perk1 ? fetchPerk('perk1') : '',
    perk2: loadoutFrame.perk2 ? fetchPerk('perk2') : '',
    perk3: loadoutFrame.perk3 ? fetchPerk('perk3') : '',
  };

  const perkGreed = {
    perk1Greed: loadoutFrame.perk1Greed ? fetchPerk('perk1', initialPerks.perk1) : '',
    perk2Greed: loadoutFrame.perk2Greed ? fetchPerk('perk2', initialPerks.perk2) : '',
    perk3Greed: loadoutFrame.perk3Greed ? fetchPerk('perk3', initialPerks.perk3) : '',
  };

  const perkObj = { ...initialPerks, ...perkGreed };
  const streaks = fetchStreaks(game);

  let primaryWeapon = loadoutFrame.primary ? fetchWeapon('primary', game) : defaultWeapon;
  let secondaryWeapon = loadoutFrame.secondary ? fetchWeapon('secondary', game) : defaultWeapon;
  if (loadoutFrame.overkill) {
    secondaryWeapon = fetchWeapon('primary', game, primaryWeapon.name);
  }

  const weapons = {
    primary: {
      ...primaryWeapon,
      optic: loadoutFrame.primary_optic ? getBO3Attachments(primaryWeapon, 'optic')[0] : '',
      attachments: implodeObject(
        getBO3Attachments(primaryWeapon, 'attachments', loadoutFrame.primary_attach)
      ),
    },
    secondary: {
      ...secondaryWeapon,
      optic: loadoutFrame.secondary_optic ? getBO3Attachments(secondaryWeapon, 'optic')[0] : '',
      attachments: implodeObject(
        getBO3Attachments(secondaryWeapon, 'attachments', loadoutFrame.secondary_attach)
      ),
    },
  };

  const lethalType = loadoutFrame.tactician ? 'tactical' : 'lethal';
  const equipment = {
    tactical:
      loadoutFrame.tactical > 0
        ? fetchEquipment('tactical', game)
        : { name: '', type: '', game: '' },
    lethal:
      loadoutFrame.lethal || loadoutFrame.tactician
        ? fetchEquipment(lethalType, game)
        : { name: '', type: '', game: '' },
  };
  if (loadoutFrame.tactical === 2 && equipment.tactical.name) equipment.tactical.name += ' x2';
  if ((loadoutFrame.dangerClose || loadoutFrame.tactician === 2) && equipment.lethal.name) {
    equipment.lethal.name += ' x2';
  }

  const wildcards = loadoutFrame?.wildcards.join(', ');
  const specialist = fetchSpecialist(game);

  return {
    ...defaultData,
    randClassName,
    perkObj,
    streaks,
    weapons,
    equipment,
    wildcards,
    specialist,
  };
};

export const useBlackOpsThreeGenerator = () => {
  const [status, setStatus] = useState<GeneratorStatus>('loading');
  const [data, setData] = useState<GeneratorData>(defaultData);

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'bo3_fetchLoadoutData',
      label: 'BlackOpsThree',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and prevent state updates from overlapping
    setTimeout(() => {
      try {
        const newLoadout = fetchNewBo3Loadout();
        setData(newLoadout);
      } catch (error) {
        console.error(error instanceof Error ? error.message : 'An unknown error occurred.');
      } finally {
        setStatus('idle');
        if (!isInitialLoad) {
          scrollToTop();
        }
      }
    }, 500);
  }, []); // Empty dependency array ensures this function is created only once.

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
