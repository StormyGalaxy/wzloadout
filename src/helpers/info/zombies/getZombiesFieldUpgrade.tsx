// --- Helpers ---
import { getFieldUpgradeList } from '@/helpers/generator/zombies/getFieldUpgradeList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function getZombiesFieldUpgrade(
  game: string = 'all'
): GeneratorItem | Record<string, GeneratorItem> {
  const data = getFieldUpgradeList(game) as Record<string, GeneratorItem>;

  return data;
}
