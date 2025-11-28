import type { SwapiCharacter } from "./models/SwapiCharacter";
import type { SwapiResponse } from "./models/SwapiRespone";

export const getSwapiCharacter = async (search: string) => {
  const response = await fetch(
    "https://swapi.dev/api/people/?search=" + search
  );
  const data: SwapiResponse = await response.json();

  return data.results;
};
