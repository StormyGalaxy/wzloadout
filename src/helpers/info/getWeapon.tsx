// --- Helpers ---
import { getPrimaryList } from '@/helpers/generator/weapons/getPrimaryList';
import { getSecondaryList } from '@/helpers/generator/weapons/getSecondaryList';
import { getMeleeList } from '@/helpers/generator/weapons/getMeleeList';
// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Types ---
import { Weapon } from '@/types/Generator';

export function getWeapon(
  game: string = 'all',
  value: string = ''
): Weapon | Record<string, Weapon> {
  const data = mergeObjectsWithRekey(
    getPrimaryList(game),
    getSecondaryList(game),
    getMeleeList(game)
  ) as Record<string, Weapon>;

  if (value) {
    // Check if value is not empty
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const weapon = data[key];
        if (weapon.name === value) {
          // Case-sensitive comparison
          return weapon as Weapon; // Return the matching weapon
        }
      }
    }
    //Return empty object if no match is found
    return { name: '', type: '', game: '' } as Weapon;
  }

  return data;
}
