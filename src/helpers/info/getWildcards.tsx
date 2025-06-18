// --- Helpers ---
import { getWildcardList } from '@/helpers/generator/getWildcardList';
// --- Types ---
import { Wildcard } from '@/types/Generator';

export function getWildcards(game: string = 'all'): Wildcard | Record<string, Wildcard> {
  const data = getWildcardList(game) as Record<string, Wildcard>;

  return data;
}
