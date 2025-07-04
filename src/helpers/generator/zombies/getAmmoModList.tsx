// --- Black Ops 6 Zombies ---
import bo6List from '@/data/black-ops/six/zombies/ammo_mod.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

const list: Record<string, ItemList> = { 'black-ops-six': bo6List };

export function getAmmoModList(game: string): ItemList {
  return list[game] || {};
}
