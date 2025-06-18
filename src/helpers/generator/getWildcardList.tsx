// --- Data ---
import bo6List from '@/json/black-ops/six/wildcard.json';
import warzoneList from '@/json/warzone/wildcard.json';
import bo3List from '@/json/black-ops/three/wildcard.json';
import bo4List from '@/json/black-ops/four/wildcard.json';
import coldWarList from '@/json/black-ops/cold-war/wildcard.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

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
