import { mergeObjectsWithRekey } from '@/helpers/_silabs/mergeObjectsWithRekey';
//Data
import bo6List from '@/json/black-ops/six/weapon/melee.json';
import mw3List from '@/json/modern-warfare/three/weapon/melee.json';
import mw2List from '@/json/modern-warfare/two/weapon/melee.json';
import mwrList from '@/json/modern-warfare/remastered/weapon/melee.json';

const weapons: Record<string, any> = {
  warzone: mergeObjectsWithRekey(bo6List, mw3List, mw2List),
  'black-ops-six': bo6List,
  'modern-warfare-three-wz': mw3List,
  'modern-warfare-two-wz': mw2List,
  'modern-warfare-remastered': mwrList,
};

export function getMeleeList(game: string): any {
  if (game.includes(',')) {
    const gameList = game.split(',').map((g) => g.trim());
    const weaponLists = gameList.map((g) => weapons[g] || {});
    return mergeObjectsWithRekey(...weaponLists);
  } else {
    return weapons[game] || {};
  }
}
