import { getCast, getMovies } from "../api/apifetch.js";
import { createActorsGallery } from "../components/cardActorCast.js";
import { createDetailsCard } from "../components/cardDetails.js";

export function createSelectEventistener(select) {
  select.addEventListener("change", (lista) => {
    const selectList = lista.target.value;
    const container = document.querySelector(".contenedor-peliculas");
    getMovies(container, selectList);
  });
}

export function firstView() {
  console.log("ejecutando");

  const container = document.querySelector(".contenedor-peliculas");
  if (container) {
    getMovies(container, "now_playing");
  } else {
    console.error("No se encontró el contenedor de películas");
  }
}

export function uploadDetails(img, movie) {
  img.addEventListener("click", async () => {
    const movieId = img.id;
    console.log("Cargando detalles de la pelicula con id: ", movieId);

    document.body.innerHTML = "";

    const { cast, crew } = await getCast(movieId);

    const detailCard = createDetailsCard(movie, cast, crew);

    document.body.appendChild(detailCard);
  });
}
