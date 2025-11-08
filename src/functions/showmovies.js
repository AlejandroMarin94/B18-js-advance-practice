import { cardPpal } from "../components/moviecard.js";


export function showmovies(movies, container){

    if (!movies || movies.length === 0) {
    container.textContent = "No se han recibido peliculas";
    return;
  } else {
    container.innerHTML = "";
  }
  
    movies.forEach(movie=>{
        const cardPeli = cardPpal(movie);
        container.appendChild(cardPeli);
    })
}
