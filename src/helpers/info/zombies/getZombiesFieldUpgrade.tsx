import { getFieldUpgradeList } from '@/helpers/generator/zombies/getFieldUpgradeList';
import { ZombiesFieldUpgrade } from '@/types/Generator';

export function getZombiesFieldUpgrade(
  game: string = 'all',
  value: string = ''
): ZombiesFieldUpgrade | Record<string, ZombiesFieldUpgrade> {
  const data = getFieldUpgradeList(game) as Record<string, ZombiesFieldUpgrade>;

  return data;
}
