// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Data ---
import bo6List from '@/data/black-ops/six/weapon/secondary.json';
import mw3List from '@/data/modern-warfare/three/weapon/secondary.json';
import mw3MeleeList from '@/data/modern-warfare/three/weapon/melee.json';
import mw2List from '@/data/modern-warfare/two/weapon/secondary.json';
import mw2MeleeList from '@/data/modern-warfare/two/weapon/melee.json';
import vanguardList from '@/data/vanguard/weapon/secondary.json';
import coldWarList from '@/data/black-ops/cold-war/weapon/secondary.json';
import bo3List from '@/data/black-ops/three/weapon/secondary.json';
import bo4List from '@/data/black-ops/four/weapon/secondary.json';
import mwrList from '@/data/modern-warfare/remastered/weapon/side_arm.json';
import ww2List from '@/data/world-war-two/weapon/secondary.json';
import ww2MeleeList from '@/data/world-war-two/weapon/melee.json';
import iwList from '@/data/infinite-warfare/weapon/secondary.json';
import wawList from '@/data/world-at-war/weapon/side_arm.json';
// --- Types ---
import { Weapon } from '@/types/Generator';

type ItemList = Weapon[] | Record<string, Weapon>;

const weapons: Record<string, ItemList> = {
  warzone: mergeObjectsWithRekey(bo6List, mw3List, mw2List),
  'black-ops-six': bo6List,
  // "modern-warfare-three": mergeObjectsWithRekey(
  //   mw3List,
  //   mw2List,
  //   mw3MeleeList,
  //   mw2MeleeList
  // ),
  'modern-warfare-three-wz': mw3List,
  'modern-warfare-three': mergeObjectsWithRekey(mw3List, mw3MeleeList, mw2MeleeList),
  'modern-warfare-two': mergeObjectsWithRekey(mw2List, mw2MeleeList),
  vanguard: vanguardList,
  'black-ops-three': bo3List,
  'black-ops-four': bo4List,
  'cold-war': coldWarList,
  'modern-warfare-remastered': mwrList,
  'world-war-two': mergeObjectsWithRekey(ww2List, ww2MeleeList),
  'infinite-warfare': iwList,
  'world-at-war': wawList,
};
export function getSecondaryList(game: string): ItemList {
  if (game.includes(',')) {
    const gameList = game.split(',').map((g) => g.trim());
    const weaponLists = gameList.map((g) => weapons[g] || {});

    return mergeObjectsWithRekey(...weaponLists);
  } else {
    return weapons[game] || {};
  }
}
