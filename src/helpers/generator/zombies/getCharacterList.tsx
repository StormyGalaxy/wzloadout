// --- World War Two Zombies ---
import ww2CharacterList from '@/json/world-war-two/zombies/character.json';
// --- Types ---
import { GeneratorItem, ItemList } from '@/types/Generator';

const list: Record<string, ItemList> = { 'world-war-two-zombies': ww2CharacterList };

export function getCharacterList(game: string): ItemList {
  return list[game] || {};
}
