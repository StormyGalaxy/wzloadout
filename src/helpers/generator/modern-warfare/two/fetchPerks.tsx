import baseList from '@/data/modern-warfare/two/perk/base.json';
import bonusList from '@/data/modern-warfare/two/perk/bonus.json';
import ultimateList from '@/data/modern-warfare/two/perk/ultimate.json';
import { randomListItem } from '@silocitypages/utils';

export function fetchPerks(): string {
  const perks: string[] = [];

  perks.push(randomListItem(baseList).name);

  let basePerk2: string;
  do {
    basePerk2 = randomListItem(baseList).name;
  } while (perks.includes(basePerk2));
  perks.push(basePerk2);

  perks.push(randomListItem(bonusList).name, randomListItem(ultimateList).name);

  return perks.join(', ');
}
