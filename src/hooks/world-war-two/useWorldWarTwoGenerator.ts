// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchStreaks } from '@/helpers/fetch/fetchStreaks';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// World War Two Specific Helpers
import { fetchPerk } from '@/helpers/generator/world-war-two/fetchPerk';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Types ---
import { GeneratorData, Weapon, GeneratorStatus } from '@/types/Generator';
// --- Data ---
import defaultData from '@/json/cod/default-generator-info.json';

const fetchNewWw2Loadout = () => {
  const game = 'world-war-two';
  const randClassName = fetchClassName();
  const division = fetchPerk('division');
  const basic = fetchPerk('basic-training');
  const secondaryNeedsAttach = basic === 'Shifty';
  const isBlitzkrieg = basic === 'Blitzkrieg';
  let streaks = fetchStreaks(game, isBlitzkrieg);
  let primAttactCount = division === 'Infantry' ? 4 : 3;
  let secondaryAttactCount = division === 'Infantry' ? 2 : 1;

  const weapons: { primary: Weapon; secondary: Weapon } = {
    primary: { ...fetchWeapon('primary', game), attachments: '' },
    secondary: { ...fetchWeapon('secondary', game, '', secondaryNeedsAttach), attachments: '' },
  };

  let equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
  };

  if (division === 'Commando') {
    equipment = {
      tactical: { name: 'Paratrooper Insert', type: 'Special', game: 'world-war-two' },
      lethal: fetchEquipment('lethal_tactical', game),
    };
  } else if (division === 'Cavalry') {
    primAttactCount = 0;
    secondaryAttactCount = 0;
    weapons.primary = {
      name: 'Cavalry Shield',
      type: 'Shield',
      game: 'world-war-two',
      no_attach: true,
    };
    weapons.secondary = { ...fetchWeapon('all', game), no_attach: true };
  }

  if (basic === 'Wanderlust') {
    weapons.primary = {
      name: 'Random Weapon',
      type: 'random',
      game: 'world-war-two',
      no_attach_info: true,
    };
    primAttactCount = 6;
  } else if (basic === 'Duelist') {
    weapons.secondary = {
      name: 'Akimbo Pistols',
      type: 'pistol',
      game: 'world-war-two',
      no_attach: true,
    };
  } else if (basic === 'Rifleman') {
    weapons.secondary = { ...fetchWeapon('primary', game, weapons.primary.name), no_attach: true };
  } else if (basic === 'Serrated') {
    equipment.lethal = { name: 'Throwing Knives x2', type: 'Lethal', game: 'world-war-two' };
    weapons.primary = fetchWeapon('melee', game, weapons.secondary.name);
  } else if (basic === 'Danger Close') {
    equipment.lethal = { name: 'Frag x3', type: 'Lethal', game: 'world-war-two' };
  } else if (basic === 'Stun X3') {
    equipment.tactical = { name: 'British N 69 x3', type: 'Lethal', game: 'world-war-two' };
  } else if (basic === 'Shifty') {
    secondaryAttactCount = 3;
  } else if (basic === 'Specialist') {
    const special1 = fetchPerk('basic-training');
    const special2 = fetchPerk('basic-training', [special1]);
    const special3 = fetchPerk('basic-training', [special1, special2]);
    streaks = `200: ${special1}, 400: ${special2}, 600: ${special3}, 800: All Perks`;
  }

  if (!weapons.primary?.no_attach) {
    weapons.primary.attachments = implodeObject(fetchAttachments(weapons.primary, primAttactCount));
  }

  if (!weapons.secondary?.no_attach) {
    weapons.secondary.attachments = implodeObject(
      fetchAttachments(weapons.secondary, secondaryAttactCount)
    );
  }

  return { ...defaultData, randClassName, streaks, weapons, equipment, division, basic };
};

export const useWorldWarTwoGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('loading');

  const generateLoadout = useCallback(async (isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'ww2_generateLoadout',
      label: 'WorldWarTwo',
      category: 'COD_Loadouts',
    });

    setTimeout(() => {
      try {
        const newLoadout = fetchNewWw2Loadout();
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
