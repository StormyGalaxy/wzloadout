// --- Black Ops 6 Zombies ---
import bo6List from '@/json/black-ops/six/zombies/ammo_mod.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

const list: Record<string, ItemList> = { 'black-ops-six': bo6List };

export function getAmmoModList(game: string): ItemList {
  return list[game] || {};
}
