// --- Data ---
import bo6List from '@/data/black-ops/six/equipment/tactical.json';
import bo6ZombiesList from '@/data/black-ops/six/zombies/tactical.json';
import warzoneList from '@/data/warzone/equipment/tactical.json';
import mw3List from '@/data/modern-warfare/three/equipment/tactical.json';
import mw3ZombiesList from '@/data/modern-warfare/three/zombies/tactical.json';
import mwrList from '@/data/modern-warfare/remastered/equipment/tactical.json';
import vanguardList from '@/data/vanguard/equipment/tactical.json';
import bo3List from '@/data/black-ops/three/equipment/tactical.json';
//BO4 had weird names
import bo4List from '@/data/black-ops/four/equipment/equipment.json';
import coldWarList from '@/data/black-ops/cold-war/equipment/tactical.json';
import ww2List from '@/data/world-war-two/equipment/tactical.json';
import mw2List from '@/data/modern-warfare/two/equipment/tactical.json';
import iwList from '@/data/infinite-warfare/equipment/tactical.json';
import wawList from '@/data/world-at-war/equipment/tactical.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

const equipment: Record<string, ItemList> = {
  'black-ops-six': bo6List,
  'black-ops-six-zombies': bo6ZombiesList,
  warzone: warzoneList,
  'modern-warfare-three': mw3List,
  'modern-warfare-three-zombies': mw3ZombiesList,
  'modern-warfare-remastered': mwrList,
  vanguard: vanguardList,
  'black-ops-three': bo3List,
  'black-ops-four': bo4List,
  'cold-war': coldWarList,
  'world-war-two': ww2List,
  'modern-warfare-two': mw2List,
  'infinite-warfare': iwList,
  'world-at-war': wawList,
};

export function getTacticalList(game: string): ItemList {
  return equipment[game] || {};
}
