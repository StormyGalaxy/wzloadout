// --- React ---
import { useState, useCallback } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchPerks } from '@/helpers/fetch/fetchPerks';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchWildcard } from '@/helpers/fetch/fetchWildcard';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
import { getEnabledGames } from '@/helpers/generator/getEnabledGames';
// --- Utils ---
import { sendEvent } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/data/cod/default-generator-info.json';
// --- Types ---
import { GeneratorData, GeneratorStatus } from '@/types/Generator';
import type { sclSettings } from '@silocitypages/ui-core';

// Helper function to get enabled games, with a fallback

const fetchNewWarzoneLoadout = (settings: sclSettings): GeneratorData => {
  const game = 'warzone';
  const randClassName = fetchClassName();
  const wildcard = fetchWildcard(game);
  const defaultGame = 'black-ops-six';

  const primAttachCount = wildcard.name === 'Gunfighter' ? 8 : 5;
  // Use the updated helper function to ensure a valid game is always returned
  const primGame = settings?.weapons
    ? getEnabledGames(settings.weapons.primary, defaultGame)
    : defaultGame;
  const secGame = settings?.weapons
    ? getEnabledGames(settings.weapons.secondary, defaultGame)
    : defaultGame;
  const meleeGame = settings?.weapons
    ? getEnabledGames(settings.weapons.melee, defaultGame)
    : defaultGame;

  const perks = fetchPerks(game, false);
  const primaryWeapon = fetchWeapon('primary', primGame);

  let secondaryWeapon;
  if (wildcard.name === 'Overkill') {
    secondaryWeapon = fetchWeapon('primary', primGame, primaryWeapon.name);
  } else {
    secondaryWeapon = fetchWeapon('secondary', secGame);
  }

  const weapons = {
    primary: {
      ...primaryWeapon,
      attachments: !primaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(primaryWeapon, primAttachCount))
        : 'No Attachments',
    },
    secondary: {
      ...secondaryWeapon,
      attachments: !secondaryWeapon?.no_attach
        ? implodeObject(fetchAttachments(secondaryWeapon, 5))
        : 'No Attachments',
    },
    melee: fetchWeapon('melee', meleeGame),
  };

  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
  };

  return { ...defaultData, randClassName, weapons, perks, equipment, wildcard };
};

export const useWarzoneGenerator = () => {
  const [data, setData] = useState<GeneratorData>(defaultData);
  const [status, setStatus] = useState<GeneratorStatus>('idle');

  const generateLoadout = useCallback((settings: sclSettings, isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'wz_fetchLoadoutData',
      label: 'Warzone',
      category: 'COD_Loadouts',
    });

    setTimeout(() => {
      try {
        const newLoadout = fetchNewWarzoneLoadout(settings);
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

  return {
    data,
    isLoading: status === 'loading',
    isGenerating: status === 'generating',
    generateLoadout,
  };
};
