// --- React ---
import { useState, useCallback, useEffect } from 'react';
// --- Helpers ---
import { implodeObject } from '@/helpers/implodeObject';
import { scrollToTop } from '@/helpers/scrollToTop';
import { fetchWeapon } from '@/helpers/fetch/fetchWeapon';
import { fetchAttachments } from '@/helpers/fetch/fetchAttachments';
import { fetchEquipment } from '@/helpers/fetch/fetchEquipment';
import { fetchClassName } from '@/helpers/fetch/fetchClassName';
// --- Zombies Specific ---
import { fetchZombiesAmmoMod } from '@/helpers/fetch/zombies/fetchZombiesAmmoMod';
import { fetchZombiesMap } from '@/helpers/fetch/zombies/fetchZombiesMap';
import { fetchZombiesGobblegum } from '@/helpers/fetch/zombies/fetchZombiesGobblegum';
import { fetchZombiesAugments } from '@/helpers/fetch/zombies/fetchZombiesAugments';
// --- Types ---
import {
  Bo6ZombiesSettings,
  GeneratorStatus,
  Weapon,
  GeneratorItem,
  Augment,
  ZombiesMap,
} from '@/types/Generator';
// --- Utils ---
import { sendEvent, setLocalStorage, getLocalStorage } from '@silocitypages/utils';
// --- Data ---
import defaultData from '@/data/cod/default-zombies-generator-info.json';

const defaultSettings: Bo6ZombiesSettings = {
  rollMap: true,
  rollGobblegum: true,
  rollAugments: true,
};

// Define a specific interface for the Black Ops 6 Zombies data
interface Bo6ZombiesData {
  randClassName: string;
  weapons: { primary: Weapon & { attachments: string; ammoMod: string }; melee: Weapon };
  equipment: { tactical: GeneratorItem; lethal: GeneratorItem; fieldUpgrade: GeneratorItem };
  gobblegum: string;
  zombieMap: ZombiesMap;
  augments: Record<string, Augment> | null;
}

const fetchNewBo6ZombiesLoadout = (): Bo6ZombiesData => {
  const game = 'black-ops-six-zombies';
  const randClassName = fetchClassName();
  const primaryWeapon = fetchWeapon('all', 'black-ops-six');

  const weapons = {
    primary: {
      ...primaryWeapon,
      attachments: !primaryWeapon.no_attach
        ? implodeObject(fetchAttachments(primaryWeapon, 8))
        : 'No Attachments',
      ammoMod: fetchZombiesAmmoMod('black-ops-six'),
    },
    melee: fetchWeapon('melee', 'black-ops-six'),
  };

  const equipment = {
    tactical: fetchEquipment('tactical', game),
    lethal: fetchEquipment('lethal', game),
    fieldUpgrade: fetchEquipment('field_upgrade', game),
  };

  const gobblegum = fetchZombiesGobblegum(game);
  const zombieMap = fetchZombiesMap(game);
  const augments = fetchZombiesAugments(game);

  return { randClassName, weapons, equipment, gobblegum, zombieMap, augments };
};

export const useBlackOpsSixZombiesGenerator = () => {
  const [status, setStatus] = useState<GeneratorStatus>('loading');
  const [settings, setSettings] = useState<Bo6ZombiesSettings>(defaultSettings);
  // Use the specific data interface for the state, casting the generic default data.
  const [data, setData] = useState<Bo6ZombiesData>(defaultData as unknown as Bo6ZombiesData);

  const generateLoadout = useCallback((isInitialLoad = false) => {
    setStatus(isInitialLoad ? 'loading' : 'generating');

    sendEvent('button_click', {
      button_id: 'bo6Zombies_fetchLoadoutData',
      label: 'BlackOpsSixZombies',
      category: 'COD_Loadouts',
    });

    // Use a timeout to simulate generation time and update state
    setTimeout(() => {
      try {
        const newLoadout = fetchNewBo6ZombiesLoadout();
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
    const rawStoredSettings = getLocalStorage('bo6ZombiesSettings');
    const storedSettings =
      typeof rawStoredSettings === 'object' && rawStoredSettings !== null
        ? rawStoredSettings
        : defaultSettings;
    setSettings({ ...defaultSettings, ...storedSettings });
    generateLoadout(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateSettings = (newSettings: Partial<Bo6ZombiesSettings>) => {
    setSettings((prev) => {
      const updated = { ...prev, ...newSettings };
      setLocalStorage('bo6ZombiesSettings', updated);
      return updated;
    });
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
