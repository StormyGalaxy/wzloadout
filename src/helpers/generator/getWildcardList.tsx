// --- Data ---
import bo6List from '@/data/black-ops/six/wildcard.json';
import warzoneList from '@/data/warzone/wildcard.json';
import bo3List from '@/data/black-ops/three/wildcard.json';
import bo4List from '@/data/black-ops/four/wildcard.json';
import coldWarList from '@/data/black-ops/cold-war/wildcard.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

const wildcards: Record<string, ItemList> = {
  'black-ops-six': bo6List,
  warzone: warzoneList,
  'black-ops-three': bo3List,
  'black-ops-four': bo4List,
  'cold-war': coldWarList,
};

export function getWildcardList(game: string): ItemList {
  return wildcards[game] || {};
}
