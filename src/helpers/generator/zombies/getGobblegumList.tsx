// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Black Ops 6 ---
import bo6GobblegumRareList from '@/data/black-ops/six/zombies/gobblegum/rare.json';
import bo6GobblegumEpicList from '@/data/black-ops/six/zombies/gobblegum/epic.json';
import bo6GobblegumLegendaryList from '@/data/black-ops/six/zombies/gobblegum/legendary.json';
import bo6GobblegumUltraList from '@/data/black-ops/six/zombies/gobblegum/ultra.json';
import bo6GobblegumWhimsicalList from '@/data/black-ops/six/zombies/gobblegum/whimsical.json';
// --- Black Ops 4 Elixers ---
import bo4ElixerClassicList from '@/data/black-ops/four/zombies/elixers/classic.json';
import bo4ElixerCommonList from '@/data/black-ops/four/zombies/elixers/common.json';
import bo4ElixerEpicList from '@/data/black-ops/four/zombies/elixers/epic.json';
import bo4ElixerLegendaryList from '@/data/black-ops/four/zombies/elixers/legendary.json';
import bo4ElixerRareList from '@/data/black-ops/four/zombies/elixers/rare.json';
// --- Black Ops 4 Talismans ---
import bo4TalismanCommonList from '@/data/black-ops/four/zombies/talismans/common.json';
import bo4TalismanEpicList from '@/data/black-ops/four/zombies/talismans/epic.json';
import bo4TalismanLegendaryList from '@/data/black-ops/four/zombies/talismans/legendary.json';
import bo4TalismanRareList from '@/data/black-ops/four/zombies/talismans/rare.json';
// --- Types ---
import { ItemList } from '@/types/Generator';

const data: Record<string, ItemList> = {
  'black-ops-six-zombies': mergeObjectsWithRekey(
    bo6GobblegumRareList,
    bo6GobblegumEpicList,
    bo6GobblegumLegendaryList,
    bo6GobblegumUltraList,
    bo6GobblegumWhimsicalList
  ),
  'black-ops-four-zombies': mergeObjectsWithRekey(
    bo4ElixerClassicList,
    bo4ElixerCommonList,
    bo4ElixerEpicList,
    bo4ElixerLegendaryList,
    bo4ElixerRareList
  ),
  'black-ops-four-zombies-talismans': mergeObjectsWithRekey(
    bo4TalismanCommonList,
    bo4TalismanEpicList,
    bo4TalismanLegendaryList,
    bo4TalismanRareList
  ),
};

export function getGobblegumList(game: string): ItemList {
  return data[game] || {};
}
