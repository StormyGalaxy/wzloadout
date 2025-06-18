// --- Helpers ---
import { getAugmentList } from '@/helpers/generator/zombies/getAugmentList';
// --- Types ---
import { Augment } from '@/types/Generator';

/**
 * The shape of an Augment after a major and minor upgrade has been randomly selected.
 */
type FetchedAugment = Omit<Augment, 'major' | 'minor'> & { major: string; minor: string };

export function fetchZombiesAugments(game: string = ''): Record<string, FetchedAugment> {
  const defaultDataList = getAugmentList(game) as Record<string, Augment>;
  const dataList: Record<string, FetchedAugment> = {};

  for (const key in defaultDataList) {
    const item = defaultDataList[key];
    const majorUpgrades = item.major;
    const minorUpgrades = item.minor;

    // Create a copy of the item to avoid modifying the original
    dataList[key] = {
      ...item,
      major: majorUpgrades[Math.floor(Math.random() * majorUpgrades.length)].name,
      minor: minorUpgrades[Math.floor(Math.random() * minorUpgrades.length)].name,
    };
  }

  return dataList;
}
