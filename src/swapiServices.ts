import type { SwapiCharacter } from "./models/SwapiCharacter";

export const getSwapiCharacter = async (search: string) => {
  const response = await fetch(
    "https://swapi.dev/api/people/?search=" + search
  );
  const data: SwapiCharacter = await response.json();

  return data;
};
