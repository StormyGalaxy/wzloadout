// --- Helpers ---
import { getAugmentList } from '@/helpers/generator/zombies/getAugmentList';
// --- Types ---
import { Augment } from '@/types/Generator';

export function fetchZombiesAugments(game: string = ''): Record<string, Augment> {
  const defaultDataList = getAugmentList(game) as Record<string, Augment>;
  const dataList: Record<string, Augment> = {};

  for (const key in defaultDataList) {
    const item = defaultDataList[key];
    const majorUpgrades = item.major;
    const minorUpgrades = item.minor;

    // Create a copy of the item to avoid modifying the original
    dataList[key] = {
      ...item,
      major: (() => {
        const majorItem = majorUpgrades[Math.floor(Math.random() * majorUpgrades.length)];
        return typeof majorItem === 'object' && majorItem !== null && 'name' in majorItem
          ? (majorItem as { name: string }).name
          : typeof majorItem === 'string'
            ? majorItem
            : '';
      })(),
      minor: (() => {
        const minorItem = minorUpgrades[Math.floor(Math.random() * minorUpgrades.length)];
        return typeof minorItem === 'object' && minorItem !== null && 'name' in minorItem
          ? (minorItem as { name: string }).name
          : typeof minorItem === 'string'
            ? minorItem
            : '';
      })(),
    };
  }

  return dataList;
}
