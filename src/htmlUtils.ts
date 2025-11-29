import type { SwapiCharacter } from "./models/SwapiCharacter";

export const createHTML = (swapiCharacter: SwapiCharacter) => {
  const section = document.getElementById("swapiContainer");

  if (section) {
    section.innerHTML = "";
  }

  const name = document.createElement("h2");
  const birth = document.createElement("p");
  const gender = document.createElement("p");
  const films = document.createElement("ul");

  name.innerHTML = swapiCharacter.name;
  birth.innerHTML = swapiCharacter.birth_year;
  gender.innerHTML = swapiCharacter.gender;

  //   swapiCharacter.films.forEach((film) => {
  //     const li = document.createElement("a");
  //     // li.innerHTML = film
  //     films.appendChild(li);
  //   });

  section?.appendChild(name);
  section?.appendChild(birth);
  section?.appendChild(gender);
  section?.appendChild(films);
};
