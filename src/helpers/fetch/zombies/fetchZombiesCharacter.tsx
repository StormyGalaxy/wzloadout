import { getCharacterList } from '@/helpers/generator/zombies/getCharacterList';
import { randomListItem } from '@silocitypages/utils';
import { GeneratorItem } from '@/types/Generator';

export function fetchZombiesCharacter(game: string = ''): GeneratorItem {
  const dataList = getCharacterList(game);

  const data = randomListItem(dataList);

  return data;
}
