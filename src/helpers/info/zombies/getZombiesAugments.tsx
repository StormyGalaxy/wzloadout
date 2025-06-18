// --- Helpers ---
import { getAugmentList } from '@/helpers/generator/zombies/getAugmentList';
// --- Types ---
import { Augment } from '@/types/Generator';

export function getZombiesAugments(game: string = 'all'): Augment | Record<string, Augment> {
  const data = getAugmentList(game) as Record<string, Augment>;

  return data;
}
