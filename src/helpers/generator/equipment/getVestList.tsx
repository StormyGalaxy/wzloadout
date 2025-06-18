// --- Data ---
import mw3List from '@/json/modern-warfare/three/equipment/vest.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

const equipment: Record<string, ItemList> = { 'modern-warfare-three': mw3List };

export function getVestList(game: string): ItemList {
  return equipment[game] || {};
}
