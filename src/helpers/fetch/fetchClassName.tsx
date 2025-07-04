import adList from '@/data/cod/adjectives.json';
import nounList from '@/data/cod/nouns.json';
import { randomListItem } from '@silocitypages/utils';

export function fetchClassName(): string {
  let adjective = randomListItem(adList);
  let noun = randomListItem(nounList);

  adjective = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);

  return `The ${adjective} ${noun}`;
}
