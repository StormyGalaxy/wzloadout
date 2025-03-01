import { getCharacterList } from "@/helpers/generator/zombies/getCharacterList";
import { randomListItem } from "@/helpers/_silabs/randomListItem";
import { ZombiesCharacter } from "@/types/Generator";

export function fetchZombiesCharacter(game: string = ""): ZombiesCharacter {
  const dataList = getCharacterList(game);

  const data = randomListItem(dataList);

  return data;
}
