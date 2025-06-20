// --- Data ---
import mw3List from '@/json/modern-warfare/three/equipment/vest.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

const equipment: Record<string, ItemList> = { 'modern-warfare-three': mw3List };

export function getVestList(game: string): ItemList {
  return equipment[game] || {};
}
