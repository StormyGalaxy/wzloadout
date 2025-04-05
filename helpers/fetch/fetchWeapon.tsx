import { getPrimaryList } from "@/helpers/generator/weapons/getPrimaryList";
import { getSecondaryList } from "@/helpers/generator/weapons/getSecondaryList";
import { getMeleeList } from "@/helpers/generator/weapons/getMeleeList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { mergeObjectsWithRekey } from "@/helpers/_silabs/mergeObjectsWithRekey";
//Types
import { Weapon } from "@/types/Generator";

const weaponListGetters: Record<string, (game: string) => any> = {
  primary: getPrimaryList,
  secondary: getSecondaryList,
  melee: getMeleeList,
  all: (game: string) =>
    mergeObjectsWithRekey(getPrimaryList(game), getSecondaryList(game)),
};

export function fetchWeapon(
  type: string = "",
  game: string = "",
  excludeWeapon: string = "",
  needsAttachments: boolean = false
): Weapon {
  const getWeaponList = weaponListGetters[type];
  let rollAgain = false;
  if (getWeaponList) {
    let data: Weapon;
    const list = getWeaponList(game);

    do {
      rollAgain = false;
      data = randomListItem(list);

      //Roll a weapon that has attachments\
      if (needsAttachments && data.no_attach) {
        rollAgain = true;
      }
    } while (data.name === excludeWeapon || rollAgain);

    return data;
  } else {
    return {} as Weapon;
  }
}
