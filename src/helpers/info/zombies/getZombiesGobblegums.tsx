// --- Helpers ---
import { getGobblegumList } from '@/helpers/generator/zombies/getGobblegumList';
// --- Types ---
import { ItemList } from '@/types/Generator';

export function getZombiesGobblegums(game: string = 'all'): ItemList {
  const data = getGobblegumList(game) as ItemList;

  return data;
}
