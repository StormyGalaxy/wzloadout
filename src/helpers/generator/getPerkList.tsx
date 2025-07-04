// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
import bo6Perk1List from '@/data/black-ops/six/perk/perk1.json';
import bo6Perk2List from '@/data/black-ops/six/perk/perk2.json';
import bo6Perk3List from '@/data/black-ops/six/perk/perk3.json';
// --- Warzone ---
import warzonePerk1List from '@/data/warzone/perk/perk1.json';
import warzonePerk2List from '@/data/warzone/perk/perk2.json';
import warzonePerk3List from '@/data/warzone/perk/perk3.json';
// --- Vanguard ---
import vanguardPerk1List from '@/data/vanguard/perk/perk1.json';
import vanguardPerk2List from '@/data/vanguard/perk/perk2.json';
import vanguardPerk3List from '@/data/vanguard/perk/perk3.json';
// --- Black Ops 3 ---
import bo3Perk1List from '@/data/black-ops/three/perk/perk1.json';
import bo3Perk2List from '@/data/black-ops/three/perk/perk2.json';
import bo3Perk3List from '@/data/black-ops/three/perk/perk3.json';
// --- Black Ops 4 ---
import bo4Perk1List from '@/data/black-ops/four/perk/perk1.json';
import bo4Perk2List from '@/data/black-ops/four/perk/perk2.json';
import bo4Perk3List from '@/data/black-ops/four/perk/perk3.json';
// --- Black Ops 4 Zombies ---
import bo4ZombiesList from '@/data/black-ops/four/zombies/perks.json';
// --- Cold War ---
import coldWarPerk1List from '@/data/black-ops/cold-war/perk/perk1.json';
import coldWarPerk2List from '@/data/black-ops/cold-war/perk/perk2.json';
import coldWarPerk3List from '@/data/black-ops/cold-war/perk/perk3.json';
// --- Modern Warfare 3 ---
import mw3BootsList from '@/data/modern-warfare/three/perk/boots.json';
import mw3GearList from '@/data/modern-warfare/three/perk/gear.json';
import mw3GlovesList from '@/data/modern-warfare/three/perk/gloves.json';
// --- Modern Warfare Remastered ---
import mwrPerk1List from '@/data/modern-warfare/remastered/perk/perk1.json';
import mwrPerk2List from '@/data/modern-warfare/remastered/perk/perk2.json';
import mwrPerk3List from '@/data/modern-warfare/remastered/perk/perk3.json';
// --- World War 2 ---
import ww2DivisionList from '@/data/world-war-two/division.json';
import ww2BasicTrainingList from '@/data/world-war-two/basic-training.json';
// --- World War 2 Zombies ---
import ww2CamouflageList from '@/data/world-war-two/zombies/mods/camouflage.json';
import ww2FreefireList from '@/data/world-war-two/zombies/mods/freefire.json';
import ww2FrontlineList from '@/data/world-war-two/zombies/mods/frontline.json';
import ww2ShellshockList from '@/data/world-war-two/zombies/mods/shellshock.json';
import ww2UniversalList from '@/data/world-war-two/zombies/mods/universal.json';
// --- Modern Warfare 2 ---
import mw2BaseList from '@/data/modern-warfare/two/perk/base.json';
import mw2BonusList from '@/data/modern-warfare/two/perk/bonus.json';
import mw2UltimateList from '@/data/modern-warfare/two/perk/ultimate.json';
// --- Infinite Warfare ---
import iwPerk1List from '@/data/infinite-warfare/perk/perk1.json';
import iwPerk2List from '@/data/infinite-warfare/perk/perk2.json';
import iwPerk3List from '@/data/infinite-warfare/perk/perk3.json';
// --- World At War ---
import wawPerk1List from '@/data/world-at-war/perk/perk1.json';
import wawPerk2List from '@/data/world-at-war/perk/perk2.json';
import wawPerk3List from '@/data/world-at-war/perk/perk3.json';
import wawVehiclePerkList from '@/data/world-at-war/perk/vehicle-perk.json';
// --- Types ---
import { InfoData } from '@/types/Info';

type PerkList = InfoData[] | Record<string, InfoData>;

interface PerkLists {
  perk1List: PerkList;
  perk2List: PerkList;
  perk3List: PerkList;
}

const perks: Record<string, PerkLists> = {
  'world-war-two-zombies': {
    perk1List: mergeObjectsWithRekey(ww2UniversalList, ww2CamouflageList),
    perk2List: mergeObjectsWithRekey(ww2FreefireList, ww2FrontlineList),
    perk3List: ww2ShellshockList,
  },
  'black-ops-four': { perk1List: bo4Perk1List, perk2List: bo4Perk2List, perk3List: bo4Perk3List },
  'black-ops-six': { perk1List: bo6Perk1List, perk2List: bo6Perk2List, perk3List: bo6Perk3List },
  warzone: {
    perk1List: warzonePerk1List,
    perk2List: warzonePerk2List,
    perk3List: warzonePerk3List,
  },
  vanguard: {
    perk1List: vanguardPerk1List,
    perk2List: vanguardPerk2List,
    perk3List: vanguardPerk3List,
  },
  'black-ops-four-zombies': { perk1List: bo4ZombiesList, perk2List: {}, perk3List: {} },
  'cold-war': {
    perk1List: coldWarPerk1List,
    perk2List: coldWarPerk2List,
    perk3List: coldWarPerk3List,
  },
  'modern-warfare-three': {
    perk1List: mw3BootsList,
    perk2List: mw3GearList,
    perk3List: mw3GlovesList,
  },
  'black-ops-three': { perk1List: bo3Perk1List, perk2List: bo3Perk2List, perk3List: bo3Perk3List },
  'modern-warfare-remastered': {
    perk1List: mwrPerk1List,
    perk2List: mwrPerk2List,
    perk3List: mwrPerk3List,
  },
  'world-war-two': { perk1List: ww2DivisionList, perk2List: ww2BasicTrainingList, perk3List: {} },
  'modern-warfare-two': {
    perk1List: mw2BaseList,
    perk2List: mw2BonusList,
    perk3List: mw2UltimateList,
  },
  'infinite-warfare': { perk1List: iwPerk1List, perk2List: iwPerk2List, perk3List: iwPerk3List },
  'world-at-war': {
    perk1List: wawPerk1List,
    perk2List: wawPerk2List,
    perk3List: mergeObjectsWithRekey(wawPerk3List, wawVehiclePerkList),
  },
};

export function getPerkList(game: string): PerkLists {
  return perks[game] || { perk1List: {}, perk2List: {}, perk3List: {} };
}
