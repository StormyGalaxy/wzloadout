// --- World War Two Zombies ---
import ww2CharacterList from '@/json/world-war-two/zombies/character.json';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type ItemList = GeneratorItem[] | Record<string, GeneratorItem>;

const list: Record<string, ItemList> = { 'world-war-two-zombies': ww2CharacterList };

export function getCharacterList(game: string): ItemList {
  return list[game] || {};
}
