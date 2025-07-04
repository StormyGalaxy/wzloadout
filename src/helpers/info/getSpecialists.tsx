// --- Data ---
import bo4List from '@/data/black-ops/four/specialists.json';
import bo3List from '@/data/black-ops/three/specialists.json';
import iwList from '@/data/infinite-warfare/combat-rig.json';
// --- Types ---
import { Specialist } from '@/types/Generator';

const dataList: Record<string, Specialist[]> = {
  'black-ops-four': bo4List,
  'black-ops-three': bo3List,
  'infinite-warfare': iwList,
};

export function getSpecialists(game: string = 'all'): Specialist[] {
  if (game === 'all') {
    return Object.values(dataList).flat();
  }

  return dataList[game] || [];
}
