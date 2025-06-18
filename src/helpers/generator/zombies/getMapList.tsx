// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Black Ops 6 Zombies ---
import bo6List from '@/json/black-ops/six/zombies/map.json';
// --- Vanguard Zombies ---
import vanguardList from '@/json/vanguard/zombies/map.json';
// --- Cold War Zombies ---
import coldWarCoreList from '@/json/black-ops/cold-war/zombies/map/core.json';
import coldWarOnslaughtList from '@/json/black-ops/cold-war/zombies/map/onslaught.json';
// --- Black Ops 4 Zombies ---
import bo4AetherList from '@/json/black-ops/four/zombies/aether_story/map.json';
import bo4ChaosList from '@/json/black-ops/four/zombies/chaos_story/map.json';
// --- World War 2 Zombies ---
import ww2List from '@/json/world-war-two/zombies/map.json';
// --- Types ---
import { ZombiesMap } from '@/types/Generator';

type ItemList = ZombiesMap[] | Record<string, ZombiesMap>;

const list: Record<string, ItemList> = {
  'black-ops-six-zombies': bo6List,
  'vanguard-zombies': vanguardList,
  'black-ops-four-zombies': mergeObjectsWithRekey(bo4AetherList, bo4ChaosList),
  'aether_story-black-ops-four-zombies': bo4AetherList,
  'chaos_story-black-ops-four-zombies': bo4ChaosList,
  'cold-war-zombies': mergeObjectsWithRekey(coldWarCoreList, coldWarOnslaughtList),
  'core-cold-war-zombies': coldWarCoreList,
  'onslaught-cold-war-zombies': coldWarOnslaughtList,
  'world-war-two-zombies': ww2List,
};

export function getMapList(game: string): ItemList {
  return list[game] || {};
}
