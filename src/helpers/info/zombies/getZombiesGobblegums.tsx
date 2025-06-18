// --- Helpers ---
import { getGobblegumList } from '@/helpers/generator/zombies/getGobblegumList';
// --- Types ---
import { Gobblegum } from '@/types/Generator';

export function getZombiesGobblegums(game: string = 'all'): Gobblegum | Record<string, Gobblegum> {
  const data = getGobblegumList(game) as Record<string, Gobblegum>;

  return data;
}
