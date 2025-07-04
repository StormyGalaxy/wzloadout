// --- Black Ops 6 Zombies ---
import bo6List from '@/data/black-ops/six/zombies/field_upgrade.json';
// --- Vanguard Zombies ---
import vanguardList from '@/data/vanguard/zombies/artifacts.json';
// --- Cold War Zombies ---
import coldWarList from '@/data/black-ops/cold-war/zombies/field_upgrade.json';
// --- Modern Warfare 3 Zombies ---
import mw3List from '@/data/modern-warfare/three/zombies/field_upgrade.json';
// --- World War 2 Zombies ---
import ww2List from '@/data/world-war-two/zombies/special.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

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
