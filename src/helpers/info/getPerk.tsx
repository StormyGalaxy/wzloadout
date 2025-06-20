// --- Helpers ---
import { getPerkList } from '@/helpers/generator/getPerkList';
// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Types ---
import { ItemList } from '@/types/Generator';

export function getPerk(game: string = 'all'): ItemList {
  const perks = getPerkList(game);
  const data = mergeObjectsWithRekey(perks.perk1List, perks.perk2List, perks.perk3List) as ItemList;

  return data;
}
