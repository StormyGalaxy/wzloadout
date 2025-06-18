// --- Utils ---
import { mergeObjectsWithRekey } from '@silocitypages/utils';
// --- Helpers ---
import { getLethalList } from '@/helpers/generator/equipment/getLethalList';
import { getTacticalList } from '@/helpers/generator/equipment/getTacticalList';
import { getFieldUpgradeList } from '@/helpers/generator/equipment/getFieldUpgradeList';
import { getVestList } from '@/helpers/generator/equipment/getVestList';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

export function getEquipment(game: string = 'all'): GeneratorItem | Record<string, GeneratorItem> {
  const data = mergeObjectsWithRekey(
    getLethalList(game),
    getTacticalList(game),
    getFieldUpgradeList(game),
    getVestList(game)
  ) as Record<string, GeneratorItem>;

  return data;
}
