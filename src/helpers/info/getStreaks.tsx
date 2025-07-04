// --- Helpers ---
import { getStreakList } from '@/helpers/generator/getStreakList';
// --- Types ---
import { Streak } from '@/types/Generator';

export function getStreaks(game: string = 'all'): Streak | Record<string, Streak> {
  const data = getStreakList(game) as Record<string, Streak>;

  return data;
}
