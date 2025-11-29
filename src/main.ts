import { createHTML } from "./htmlUtils";
import "./style.css";
import { getSwapiCharacter } from "./swapiServices";

const searchForm = document.getElementById("searchForm");

searchForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputSearch = document.getElementById("input");
  if (!inputSearch) return;

  const searchText = (inputSearch as HTMLInputElement).value;

  const data = await getSwapiCharacter(searchText);

  createHTML(data);
  console.log(data);
});
