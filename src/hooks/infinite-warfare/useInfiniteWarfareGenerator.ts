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
// --- IW Specific Helpers ---
import { fetchPerk } from '@/helpers/generator/infinite-warfare/fetchPerk';
import { fetchAttachments } from '@/helpers/generator/infinite-warfare/fetchAttachments';
import { getLoadoutFrame } from '@/helpers/generator/infinite-warfare/frame/getLoadoutFrame';
// --- Types ---
import { GeneratorStatus, GeneratorData, GeneratorItem } from '@/types/Generator';
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

// This function contains the core generation logic and is defined outside the hook
// so that it doesn't get recreated on every render and cause dependency issues.
const fetchNewLoadout = () => {
  const loadoutFrame: LoadoutFrame = getLoadoutFrame();
  const game = 'infinite-warfare';
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

  console.log(loadoutFrame);

  const weapons = {
    primary: {
      ...primaryWeapon,
      optic: loadoutFrame.primary_optic ? fetchAttachments(primaryWeapon, 'optic')[0] : '',
      attachments: implodeObject(
        fetchAttachments(primaryWeapon, 'attachments', loadoutFrame.primary_attach)
      ),
    },
    secondary: {
      ...secondaryWeapon,
      optic: loadoutFrame.secondary_optic ? fetchAttachments(secondaryWeapon, 'optic')[0] : '',
      attachments: implodeObject(
        fetchAttachments(secondaryWeapon, 'attachments', loadoutFrame.secondary_attach)
      ),
    },
  };

  const equipment = {
    tactical:
      loadoutFrame.tactical > 0
        ? fetchEquipment('tactical', game)
        : { name: '', type: '', game: '' },
    lethal: loadoutFrame.lethal ? fetchEquipment('lethal', game) : { name: '', type: '', game: '' },
  };
  if (
    loadoutFrame.tacticalx2 &&
    equipment.tactical.name &&
    !equipment.tactical.name.includes('x2')
  ) {
    equipment.tactical.name += ' x2';
  }
  if (loadoutFrame.dangerClose && equipment.lethal.name && !equipment.lethal.name.includes('x2')) {
    equipment.lethal.name += ' x2';
  }

  const wildcards = loadoutFrame?.wildcards.join(', ');
  const rig = fetchSpecialist(game);
  const payload = rig?.payload?.[Math.floor(Math.random() * 3)] ?? '';
  const trait = rig?.trait?.[Math.floor(Math.random() * 3)] ?? '';
  const combat_rig = `${rig.name} - ${trait} - ${payload}`;

  return {
    ...defaultData,
    randClassName,
    perkObj,
    streaks,
    weapons,
    equipment,
    wildcards,
    combat_rig,
  };
};

export const useInfiniteWarfareGenerator = () => {
  const [status, setStatus] = useState<GeneratorStatus>('loading');
  const [data, setData] = useState<GeneratorData>(defaultData);

  const generateLoadout = useCallback(async (isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'iw_fetchLoadoutData',
      label: 'InfiniteWarfare',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewLoadout();
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
