// --- Helpers ---
import { getWildcardList } from '@/helpers/generator/getWildcardList';
// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function fetchWildcard(game: string = ''): GeneratorItem {
  const dataList = getWildcardList(game);

  return randomListItem(dataList);
}
