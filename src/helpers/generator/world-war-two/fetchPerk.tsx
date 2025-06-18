import division from '@/json/world-war-two/division.json';
import basicTraining from '@/json/world-war-two/basic-training.json';
import { randomListItem } from '@silocitypages/utils';

const perks: Record<string, any> = {
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
