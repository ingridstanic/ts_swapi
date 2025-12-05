import type { Films } from "./models/Films";
import type { SwapiCharacter } from "./models/SwapiCharacter";

export const createHTML = (swapiCharacter: SwapiCharacter[]) => {
  const section = document.getElementById("swapiContainer");

  if (section) {
    section.innerHTML = "";
  }
  swapiCharacter.forEach((character) => {
    const name = document.createElement("h2");
    const birth = document.createElement("p");
    const gender = document.createElement("p");
    const header = document.createElement("h3");

    name.innerHTML = "Name: " + character.name;
    birth.innerHTML = "Date of birth: " + character.birth_year;
    gender.innerHTML = "Gender: " + character.gender;
    header.innerHTML = "Movies " + character.name + " starred in:";

    const promises: Promise<Response>[] = [];
    character.films.forEach((url) => {
      promises.push(fetch(url));
    });
    Promise.all(promises).then((responses) => {
      responses.forEach(async (response) => {
        const movies: Films = await response.json();

        const movieList: Films[] = [];
        movieList.push(movies);

        movieList.forEach((movie) => {
          const movieContainer = document.createElement("ul");
          const title = document.createElement("li");

          title.innerHTML = movie.title;
          title.className = "title";

          movieContainer.appendChild(title);
          section?.appendChild(movieContainer);
        });
      });
    });

    section?.appendChild(name);
    section?.appendChild(birth);
    section?.appendChild(gender);
    section?.appendChild(header);
  });
};
