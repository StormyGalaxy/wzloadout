// --- Data ---
import perk1 from '@/json/black-ops/three/perk/perk1.json';
import perk2 from '@/json/black-ops/three/perk/perk2.json';
import perk3 from '@/json/black-ops/three/perk/perk3.json';
// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

const perks: Record<string, ItemList> = { perk1: perk1, perk2: perk2, perk3: perk3 };

export function fetchPerk(perk: string, currentPerk: string = ''): string {
  let randPerk: string;

  do {
    randPerk = randomListItem(perks[perk]).name;
  } while (currentPerk === randPerk);

  return randPerk;
}
