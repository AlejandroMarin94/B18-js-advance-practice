import { showmovies } from "../functions/showmovies.js";
import { apiConfig } from "./apiconfig.js";

export async function getMovies(container, datalist) {
  try {
    const response = await fetch(
      `${apiConfig.baseUrl}${datalist}?api_key=${apiConfig.apiKey}`
    );
    if (!response.ok)
      throw new Error("No se han encontrado peliculas", response.status);

    const data = await response.json();

    showmovies(data.results, container);
  } catch(error) {
    console.log("Error", error);
  }
}
