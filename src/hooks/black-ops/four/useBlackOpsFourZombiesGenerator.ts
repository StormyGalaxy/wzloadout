// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// --- Zombies Specific ---
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
import { fetchZombiesGobblegum } from '@/helpers/fetch/zombies/fetchZombiesGobblegum';
import { fetchZombiesPerks } from '@/helpers/fetch/zombies/fetchZombiesPerks';
// --- Types ---
import { Bo4ZombiesSettings, Weapon, GeneratorItem, ZombiesMap } from '@/types/Generator';
// --- Utils ---
import { sendEvent, setLocalStorage, getLocalStorage } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/json/cod/default-zombies-generator-info.json';

const defaultSettings: Bo4ZombiesSettings = {
  rollMap: true,
  rollElixers: true,
  rollTalisman: true,
};

interface Bo4ZombiesData {
  randClassName: string;
  story: { key: string; display: string };
  weapons: { starting: Weapon; special: Weapon };
  equipment: { lethal: GeneratorItem };
  elixers: string;
  talisman: string;
  zombieMap: ZombiesMap;
  zombiePerks: string[];
}

function fetchZombiesStory() {
  const stories = ['aether_story', 'chaos_story'];
  return stories[Math.floor(Math.random() * stories.length)];
}

function fetchZombiesMode() {
  const isRush = Math.random() < 0.3; // 30% Chance of Rush mode
  const difficulties = ['Casual', 'Normal', 'Hardcore', 'Realistic'];
  return {
    mode: isRush ? 'Rush' : 'Classic',
    difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
  };
}

export const useBlackOpsFourZombiesGenerator = () => {
  const [status, setStatus] = useState('loading');
  const [settings, setSettings] = useState<Bo4ZombiesSettings>(defaultSettings);
  const [data, setData] = useState<Bo4ZombiesData>(defaultData);

  const fetchAndSetData = useCallback(async () => {
    sendEvent('button_click', {
      button_id: 'bo4Zombies_fetchLoadoutData',
      label: 'BlackOpsFourZombies',
      category: 'COD_Loadouts',
    });

    try {
      const game = 'black-ops-four-zombies';
      const randClassName = fetchClassName();
      const story_key = fetchZombiesStory();
      const story = {
        key: story_key,
        display: story_key
          .split('_')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
      };
      const weapons = {
        starting: fetchWeapon('all', game),
        special: fetchWeapon('all', `${story_key}-${game}`),
      };
      const equipment = { lethal: fetchEquipment('lethal', game) };
      const elixers = fetchZombiesGobblegum(game);
      const talisman = fetchZombiesGobblegum(`${game}-talismans`, 1);
      const zombieMap = fetchZombiesMap(`${story_key}-${game}`);

      if (zombieMap?.mode === 'Classic/Rush') {
        const zombiesMode = fetchZombiesMode();
        zombieMap.difficulty = zombiesMode.difficulty;
        zombieMap.mode = zombiesMode.mode;
      }

      const zombiePerks = fetchZombiesPerks(game);

      setData({
        randClassName,
        story,
        weapons,
        equipment,
        elixers,
        talisman,
        zombieMap,
        zombiePerks,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unknown error occurred.');
      }
    }
  }, []);

  const generateLoadout = useCallback(async () => {
    setStatus('generating');
    await fetchAndSetData();
    setTimeout(() => {
      setStatus('idle');
      scrollToTop();
    }, 500);
  }, [fetchAndSetData]);

  useEffect(() => {
    const rawStoredSettings = getLocalStorage('bo4ZombiesSettings');
    const storedSettings =
      typeof rawStoredSettings === 'object' && rawStoredSettings !== null
        ? rawStoredSettings
        : defaultSettings;
    const completeSettings = { ...defaultSettings, ...(storedSettings as Bo4ZombiesSettings) };
    setSettings(completeSettings);

    fetchAndSetData().finally(() => {
      setTimeout(() => {
        setStatus('idle');
      }, 500);
    });
  }, [fetchAndSetData]);

  const updateSettings = (newSettings: Partial<Bo4ZombiesSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    setLocalStorage('bo4ZombiesSettings', updated);
  };

  return {
    data,
    settings,
    isLoading: status === 'loading',
    isGenerating: status === 'generating',
    generateLoadout,
    updateSettings,
  };
};
