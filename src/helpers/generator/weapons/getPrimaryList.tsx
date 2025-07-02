// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Data ---
import bo6List from '@/data/black-ops/six/weapon/primary.json';
import mw3List from '@/data/modern-warfare/three/weapon/primary.json';
import vanguardList from '@/data/vanguard/weapon/primary.json';
import coldWarList from '@/data/black-ops/cold-war/weapon/primary.json';
import bo3List from '@/data/black-ops/three/weapon/primary.json';
import bo4List from '@/data/black-ops/four/weapon/primary.json';
import mwrList from '@/data/modern-warfare/remastered/weapon/primary.json';
import ww2List from '@/data/world-war-two/weapon/primary.json';
import ww2ZombieList from '@/data/world-war-two/zombies/weapon.json';
import iwList from '@/data/infinite-warfare/weapon/primary.json';
import wawList from '@/data/world-at-war/weapon/primary.json';
// --- Modern Warfare 2 ---
import mw2List from '@/data/modern-warfare/two/weapon/primary.json';
import mw2RiotList from '@/data/modern-warfare/two/weapon/riot.json';
// --- Black Ops 4 Zombies ---
import bo4ZombieList from '@/data/black-ops/four/zombies/start_weapon.json';
import bo4ZombieAetherSpecialList from '@/data/black-ops/four/zombies/aether_story/special_weapon.json';
import bo4ZombieChaosSpecialList from '@/data/black-ops/four/zombies/chaos_story/special_weapon.json';
// --- Types ---
import { Weapon } from '@/types/Generator';

type ItemList = Weapon[] | Record<string, Weapon>;

const weapons: Record<string, ItemList> = {
  warzone: mergeObjectsWithRekey(bo6List, mw3List, mw2List),
  'black-ops-six': bo6List,
  // "modern-warfare-three": mergeObjectsWithRekey(mw2RiotList, mw3List, mw2List),
  'modern-warfare-three': mergeObjectsWithRekey(mw2RiotList, mw3List),
  'modern-warfare-three-wz': mw3List,
  'modern-warfare-two': mw2List,
  vanguard: vanguardList,
  'cold-war': coldWarList,
  'black-ops-three': bo3List,
  'black-ops-four': bo4List,
  'black-ops-four-zombies': bo4ZombieList,
  'aether_story-black-ops-four-zombies': bo4ZombieAetherSpecialList,
  'chaos_story-black-ops-four-zombies': bo4ZombieChaosSpecialList,
  'modern-warfare-remastered': mwrList,
  'world-war-two': ww2List,
  'world-war-two-zombies': ww2ZombieList,
  'infinite-warfare': iwList,
  'world-at-war': wawList,
};

export function getPrimaryList(game: string): ItemList {
  if (game.includes(',')) {
    const gameList = game.split(',').map((g) => g.trim());
    const weaponLists = gameList.map((g) => weapons[g] || {});

    return mergeObjectsWithRekey(...weaponLists);
  } else {
    return weapons[game] || {};
  }
}
