import { getAmmoModList } from '@/helpers/generator/zombies/getAmmoModList';
import { randomListItem } from '@silocitypages/utils';

export function fetchZombiesAmmoMod(game: string = ''): string {
  const dataList = getAmmoModList(game);

  return randomListItem(dataList).name;
}
