import { getAmmoModList } from '@/helpers/generator/zombies/getAmmoModList';
import { randomListItem } from '@silocitypages/utils';
import { AmmoMod } from '@/types/Generator';

export function fetchZombiesAmmoMod(game: string = ''): AmmoMod {
  const dataList = getAmmoModList(game);

  return randomListItem(dataList).name;
}
