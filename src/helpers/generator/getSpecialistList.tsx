// --- Data ---
import bo3List from '@/data/black-ops/three/specialists.json';
import bo4List from '@/data/black-ops/four/specialists.json';
import iwList from '@/data/infinite-warfare/combat-rig.json';
// --- Types ---
import { Specialist } from '@/types/Generator';

type ItemList = Specialist[] | Record<string, Specialist>;

const data: Record<string, ItemList> = {
  'black-ops-three': bo3List,
  'black-ops-four': bo4List,
  'infinite-warfare': iwList,
};

export function getSpecialistList(game: string): ItemList {
  return data[game] || {};
}
