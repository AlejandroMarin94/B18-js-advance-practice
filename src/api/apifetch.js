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


export async function getCast(movieId) {
  try{
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ae7be434369d2443fe4989e702fb311e`);

  const data = await response.json();
  return{ 
    cast: data.cast, 
    crew: data.crew 
}
    

} catch(error){"Error al obtener el reparto", error.message}
}