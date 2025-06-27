// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
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
import type { GeneratorData, GeneratorStatus } from '@/types/Generator';
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

export const useBlackOpsFourGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback(async (isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    if (!isInitialLoad) {
      sendEvent('button_click', {
        button_id: 'bo4_generateLoadout',
        label: 'BlackOpsFour',
        category: 'COD_Loadouts',
      });
    }

    try {
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
      const weapons = {
        primary: {
          ...(loadoutFrame.primary ? fetchWeapon('primary', game) : defaultWeapon),
          optic: '',
          attachments: '',
        },
        secondary: {
          ...(loadoutFrame.secondary
            ? fetchWeapon('secondary', game, '', secondaryNeedsAttach)
            : defaultWeapon),
          optic: '',
          attachments: '',
        },
      };

      //Check for underkill
      if (loadoutFrame.underkill) {
        weapons.primary = {
          ...fetchWeapon('secondary', game, weapons.secondary.name, primaryNeedsAttach),
          optic: '',
          attachments: '',
        };
      }

      if (loadoutFrame.primary_optic) {
        weapons.primary.optic = fetchAttachments(weapons.primary, 'optic')[0];
      }

      //Get Primary Attachments
      if (!weapons.primary?.no_attach && loadoutFrame?.primary_attach > 0) {
        weapons.primary.attachments = implodeObject(
          fetchAttachments(weapons.primary, 'attachments', loadoutFrame.primary_attach)
        );
      }

      //Check for overkill
      if (loadoutFrame.overkill) {
        weapons.secondary = {
          ...fetchWeapon('primary', game, weapons.primary.name),
          optic: '',
          attachments: '',
        };
      }

      if (!weapons.secondary?.no_attach && loadoutFrame.secondary_optic) {
        weapons.secondary.optic = fetchAttachments(weapons.secondary, 'optic')[0];
      }

      //Verify if secondary weapon has attachments
      if (!weapons.secondary?.no_attach && loadoutFrame.secondary_attach > 0) {
        weapons.secondary.attachments = implodeObject(
          fetchAttachments(weapons.secondary, 'attachments', loadoutFrame.secondary_attach)
        );
      }

      const equipment = {
        gear: loadoutFrame.gear > 0 ? fetchEquipment('tactical', game).name : '',
        equipment: loadoutFrame.equipment ? fetchEquipment('lethal', game).name : '',
      };

      //Check for x2 gear
      equipment.gear += loadoutFrame.gear === 2 ? ' x2' : '';

      const wildcards = loadoutFrame?.wildcards.join(', ');
      const specialist = fetchSpecialist(game);

      // A brief timeout to give the feeling of generation
      await new Promise((resolve) => setTimeout(resolve, 500));

      setData({
        ...data,
        randClassName,
        perkObj,
        streaks,
        weapons,
        equipment,
        wildcards,
        specialist,
      });
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
