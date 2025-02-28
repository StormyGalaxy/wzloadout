import { getAmmoModList } from "@/helpers/generator/zombies/getAmmoModList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { AmmoMod } from "@/types/Generator";

export function fetchZombiesAmmoMod(game: string = ""): AmmoMod {
  const dataList = getAmmoModList(game);

  return randomListItem(dataList).name;
}
