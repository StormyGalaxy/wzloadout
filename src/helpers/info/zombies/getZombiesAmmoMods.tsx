// --- Helpers ---
import { getAmmoModList } from '@/helpers/generator/zombies/getAmmoModList';
// --- Types ---
import { AmmoMod } from '@/types/Generator';

export function getZombiesAmmoMods(game: string = 'all'): AmmoMod | Record<string, AmmoMod> {
  const data = getAmmoModList(game) as Record<string, AmmoMod>;

  return data;
}
