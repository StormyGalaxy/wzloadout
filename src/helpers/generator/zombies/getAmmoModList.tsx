// --- Black Ops 6 Zombies ---
import bo6List from '@/json/black-ops/six/zombies/ammo_mod.json';
// --- Types ---
import { GeneratorItem, ItemList } from '@/types/Generator';

const list: Record<string, ItemList> = { 'black-ops-six': bo6List };

export function getAmmoModList(game: string): ItemList {
  return list[game] || {};
}
