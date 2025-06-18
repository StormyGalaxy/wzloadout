// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Data ---
import bo6List from '@/json/black-ops/six/weapon/melee.json';
import mw3List from '@/json/modern-warfare/three/weapon/melee.json';
import mw2List from '@/json/modern-warfare/two/weapon/melee.json';
import mwrList from '@/json/modern-warfare/remastered/weapon/melee.json';
// --- Types ---
import { Weapon } from '@/types/Generator';

type ItemList = Weapon[] | Record<string, Weapon>;

const weapons: Record<string, ItemList> = {
  warzone: mergeObjectsWithRekey(bo6List, mw3List, mw2List),
  'black-ops-six': bo6List,
  'modern-warfare-three-wz': mw3List,
  'modern-warfare-two-wz': mw2List,
  'modern-warfare-remastered': mwrList,
};

export function getMeleeList(game: string): ItemList {
  if (game.includes(',')) {
    const gameList = game.split(',').map((g) => g.trim());
    const weaponLists = gameList.map((g) => weapons[g] || {});

    return mergeObjectsWithRekey(...weaponLists);
  } else {
    return weapons[game] || {};
  }
}
