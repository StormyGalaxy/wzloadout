import { getAmmoModList } from '@/helpers/generator/zombies/getAmmoModList';
import { randomListItem } from '@silocitypages/utils';
import { GeneratorItem } from '@/types/Generator';

export function fetchZombiesAmmoMod(game: string = ''): GeneratorItem {
  const dataList = getAmmoModList(game);

  return randomListItem(dataList).name;
}
