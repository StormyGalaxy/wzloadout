// --- Helpers ---
import { getWildcardList } from '@/helpers/generator/getWildcardList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function getWildcards(game: string = 'all'): GeneratorItem | Record<string, GeneratorItem> {
  const data = getWildcardList(game) as Record<string, GeneratorItem>;

  return data;
}
