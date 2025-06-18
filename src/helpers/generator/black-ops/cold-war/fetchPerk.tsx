// --- Data ---
import perk1 from '@/json/black-ops/cold-war/perk/perk1.json';
import perk2 from '@/json/black-ops/cold-war/perk/perk2.json';
import perk3 from '@/json/black-ops/cold-war/perk/perk3.json';
// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

const perks: Record<string, ItemList> = {
  perk1: perk1,
  perk2: perk2,
  perk3: perk3,
  all: [...perk1, ...perk2, ...perk3],
};

export function fetchPerk(perk: string, currentPerks: string | string[] = ''): string {
  let randPerk: string;
  if (typeof currentPerks === 'string') {
    currentPerks = [currentPerks]; // Convert single string to an array
  }

  do {
    randPerk = randomListItem(perks[perk]).name;
  } while (currentPerks.includes(randPerk));

  return randPerk;
}
