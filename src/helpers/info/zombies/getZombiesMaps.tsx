// --- Helpers ---
import { getMapList } from '@/helpers/generator/zombies/getMapList';
// --- Types ---
import { ZombiesMap } from '@/types/Generator';

export function getZombiesMaps(game: string = 'all'): ZombiesMap | Record<string, ZombiesMap> {
  const data = getMapList(game) as Record<string, ZombiesMap>;

  return data;
}
