// --- Data ---
import perk1 from '@/data/infinite-warfare/perk/perk1.json';
import perk2 from '@/data/infinite-warfare/perk/perk2.json';
import perk3 from '@/data/infinite-warfare/perk/perk3.json';
// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Types ---
import { ItemList } from '@/types/Generator';

const perks: Record<string, ItemList> = { perk1: perk1, perk2: perk2, perk3: perk3 };

export function fetchPerk(perk: string, currentPerk: string = ''): string {
  let randPerk: string;
  do {
    randPerk = randomListItem(perks[perk]).name;
  } while (currentPerk === randPerk);

  return randPerk;
}
