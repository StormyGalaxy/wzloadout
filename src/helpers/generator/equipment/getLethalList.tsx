// --- Data ---
import bo6List from '@/data/black-ops/six/equipment/lethal.json';
import bo6ZombiesList from '@/data/black-ops/six/zombies/lethal.json';
import warzoneList from '@/data/warzone/equipment/lethal.json';
import mw3List from '@/data/modern-warfare/three/equipment/lethal.json';
import mw3ZombiesList from '@/data/modern-warfare/three/zombies/lethal.json';
import vanguardList from '@/data/vanguard/equipment/lethal.json';
import bo3List from '@/data/black-ops/three/equipment/lethal.json';
//BO4 had weird names
import bo4List from '@/data/black-ops/four/equipment/gear.json';
import bo4ZombiesList from '@/data/black-ops/four/zombies/equipment.json';
import coldWarList from '@/data/black-ops/cold-war/equipment/lethal.json';
import ww2List from '@/data/world-war-two/equipment/lethal.json';
import mw2List from '@/data/modern-warfare/two/equipment/lethal.json';
import iwList from '@/data/infinite-warfare/equipment/lethal.json';
import wawList from '@/data/world-at-war/equipment/lethal.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

const equipment: Record<string, ItemList> = {
  'black-ops-six': bo6List,
  'black-ops-six-zombies': bo6ZombiesList,
  warzone: warzoneList,
  'modern-warfare-three': mw3List,
  'modern-warfare-three-zombies': mw3ZombiesList,
  vanguard: vanguardList,
  'black-ops-three': bo3List,
  'black-ops-four': bo4List,
  'black-ops-four-zombies': bo4ZombiesList,
  'cold-war': coldWarList,
  'world-war-two': ww2List,
  'modern-warfare-two': mw2List,
  'infinite-warfare': iwList,
  'world-at-war': wawList,
};

export function getLethalList(game: string): ItemList {
  return equipment[game] || {};
}
