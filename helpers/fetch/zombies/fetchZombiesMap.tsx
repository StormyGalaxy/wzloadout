import { getMapList } from "@/helpers/generator/zombies/getMapList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { ZombiesMap } from "@/types/Generator";

export function fetchZombiesMap(game: string = ""): ZombiesMap {
  const dataList = getMapList(game);

  const data = randomListItem(dataList);

  return data;
}
