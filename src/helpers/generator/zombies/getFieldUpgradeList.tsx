// --- Black Ops 6 Zombies ---
import bo6List from '@/json/black-ops/six/zombies/field_upgrade.json';
// --- Vanguard Zombies ---
import vanguardList from '@/json/vanguard/zombies/artifacts.json';
// --- Cold War Zombies ---
import coldWarList from '@/json/black-ops/cold-war/zombies/field_upgrade.json';
// --- Modern Warfare Three Zombies ---
import mw3List from '@/json/modern-warfare/three/zombies/field_upgrade.json';
// --- World War 2 Zombies ---
import ww2List from '@/json/world-war-two/zombies/special.json';
// --- Types ---
import { GeneratorItem, ItemList } from '@/types/Generator';

const data: Record<string, ItemList> = {
  'black-ops-six': bo6List,
  vanguard: vanguardList,
  'cold-war': coldWarList,
  'modern-warfare-three': mw3List,
  'world-war-two-zombies': ww2List,
};

export function getFieldUpgradeList(game: string): ItemList {
  return data[game] || {};
}
