// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Data ---
import division from '@/json/world-war-two/division.json';
import basicTraining from '@/json/world-war-two/basic-training.json';
// --- Types ---
import { WW2Perk } from '@/types/Generator';

type ItemList = WW2Perk[] | Record<string, WW2Perk>;

const perks: Record<string, ItemList> = {
  division,
  'basic-training': basicTraining,
  all: [...division, ...basicTraining],
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
