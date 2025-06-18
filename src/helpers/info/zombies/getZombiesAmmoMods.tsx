// --- Helpers ---
import { getAmmoModList } from '@/helpers/generator/zombies/getAmmoModList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function getZombiesAmmoMods(
  game: string = 'all'
): GeneratorItem | Record<string, GeneratorItem> {
  const data = getAmmoModList(game) as Record<string, GeneratorItem>;

  return data;
}
