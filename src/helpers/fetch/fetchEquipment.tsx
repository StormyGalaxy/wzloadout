// --- Helpers ---
import { getLethalList } from '@/helpers/generator/equipment/getLethalList';
import { getTacticalList } from '@/helpers/generator/equipment/getTacticalList';
import { getFieldUpgradeList } from '@/helpers/generator/equipment/getFieldUpgradeList';
import { getVestList } from '@/helpers/generator/equipment/getVestList';
// --- Utils ---
import { randomListItem } from '@silocitypages/utils';
// --- Types ---
import { GeneratorItem } from '@/types/Generator';

type EquipmentList = GeneratorItem[] | Record<string, GeneratorItem>;

const equipmentListGetters: Record<string, (game: string) => EquipmentList> = {
  lethal: getLethalList,
  tactical: getTacticalList,
  field_upgrade: getFieldUpgradeList,
  vest: getVestList,
};

export function fetchEquipment(type: string, game: string = ''): GeneratorItem {
  if (type === 'lethal_tactical') {
    const lethalList = getLethalList(game);
    const tacticalList = getTacticalList(game);

    // Ensure both lists are arrays before spreading them
    const lethalArray = Array.isArray(lethalList) ? lethalList : Object.values(lethalList);
    const tacticalArray = Array.isArray(tacticalList) ? tacticalList : Object.values(tacticalList);

    const combinedList = [...lethalArray, ...tacticalArray];
    return randomListItem(combinedList);
  } else {
    const getEquipmentList = equipmentListGetters[type];

    if (getEquipmentList) {
      const dataList = getEquipmentList(game);
      return randomListItem(dataList);
    } else {
      return {} as GeneratorItem;
    }
  }
}
