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
// --- Black Ops 4 Specific Helpers ---
import { fetchPerk } from '@/helpers/generator/black-ops/four/fetchPerk';
import { fetchAttachments } from '@/helpers/generator/black-ops/four/fetchAttachments';
import { getLoadoutFrame } from '@/helpers/generator/black-ops/four/frame/getLoadoutFrame';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import type {
  GeneratorData,
  GeneratorStatus,
  PerkObject,
  Weapon,
  GeneratorItem,
} from '@/types/Generator';
import type { LoadoutFrame } from '@/types/BlackOps4';
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

const fetchNewBo4Loadout = (): GeneratorData => {
  const loadoutFrame: LoadoutFrame = getLoadoutFrame();
  const game = 'black-ops-four';
  const randClassName = fetchClassName();

  //For underkill
  const primaryNeedsAttach =
    loadoutFrame.primary_optic || loadoutFrame.primary_attach > 0 ? true : false;
  const secondaryNeedsAttach =
    loadoutFrame.secondary_optic || loadoutFrame.secondary_attach > 0 ? true : false;
  let perkGluttonySlot = '';
  let perk1 = '';
  let perk2 = '';
  let perk3 = '';

  if (loadoutFrame.perk1Gluttony) {
    perkGluttonySlot = 'perk1';
  } else if (loadoutFrame.perk2Gluttony) {
    perkGluttonySlot = 'perk2';
  } else if (loadoutFrame.perk3Gluttony) {
    perkGluttonySlot = 'perk3';
  }

  if (perkGluttonySlot) {
    // Check if a slot was found
    perk1 = fetchPerk(perkGluttonySlot);
    perk2 = fetchPerk(perkGluttonySlot, perk1);
    perk3 = fetchPerk(perkGluttonySlot, [perk1, perk2]);
  } else {
    perk1 = loadoutFrame.perk1 ? fetchPerk('perk1') : '';
    perk2 = loadoutFrame.perk2 ? fetchPerk('perk2') : '';
    perk3 = loadoutFrame.perk3 ? fetchPerk('perk3') : '';
  }

  const initialPerks = { perk1: perk1, perk2: perk2, perk3: perk3 };

  const perkGreed = {
    perk1Greed: loadoutFrame.perk1Greed ? fetchPerk('perk1', [perk1, perk2, perk3]) : '',
    perk2Greed: loadoutFrame.perk2Greed ? fetchPerk('perk2', [perk1, perk2, perk3]) : '',
    perk3Greed: loadoutFrame.perk3Greed ? fetchPerk('perk3', [perk1, perk2, perk3]) : '',
  };

  const perkObj = { ...initialPerks, ...perkGreed };
  const streaks = fetchStreaks(game);

  let primaryWeapon: Weapon = loadoutFrame.primary ? fetchWeapon('primary', game) : defaultWeapon;
  let secondaryWeapon: Weapon = loadoutFrame.secondary
    ? fetchWeapon('secondary', game, '', secondaryNeedsAttach)
    : defaultWeapon;

  if (loadoutFrame.underkill) {
    primaryWeapon = fetchWeapon('secondary', game, secondaryWeapon.name, primaryNeedsAttach);
  } else if (loadoutFrame.overkill) {
    secondaryWeapon = fetchWeapon('primary', game, primaryWeapon.name);
  }

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
    gear: loadoutFrame.gear > 0 ? fetchEquipment('tactical', game).name : '',
    equipment: loadoutFrame.equipment ? fetchEquipment('lethal', game).name : '',
  };

  if (loadoutFrame.gear === 2 && equipment.gear) equipment.gear += ' x2';

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

export const useBlackOpsFourGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'bo4_generateLoadout',
      label: 'BlackOpsFour',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewBo4Loadout();
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
