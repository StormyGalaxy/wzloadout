// --- Helpers ---
import { getFieldUpgradeList } from '@/helpers/generator/zombies/getFieldUpgradeList';
// --- Types ---
import { ZombiesFieldUpgrade } from '@/types/Generator';

export function getZombiesFieldUpgrade(
  game: string = 'all'
): ZombiesFieldUpgrade | Record<string, ZombiesFieldUpgrade> {
  const data = getFieldUpgradeList(game) as Record<string, ZombiesFieldUpgrade>;

  return data;
}
