import { barraIconos } from "./components/barraIconos.js";

import { createDetailsCard } from "./components/cardDetails.js";
import { firstView } from "./functions/evenlistener.js";
import "./scss/style.scss";


  document.querySelector("#app").innerHTML = `
`;

  const containerPeliculas = document.createElement("div");
  containerPeliculas.classList.add("contenedor-peliculas", "grid-view");
  const barraDiv= document.createElement("div");
  barraDiv.className = "barraDiv";
  barraDiv.textContent ="Adios"
  const containerPeliculasHero = document.createElement("div");
  containerPeliculasHero.className= "containerHero";


  

  

  

  const barra = barraIconos(containerPeliculas);
  const app = document.querySelector("#app");
  containerPeliculasHero.appendChild(barra);
  containerPeliculasHero.appendChild(containerPeliculas);

  app.appendChild(containerPeliculasHero);

  const cardsSecondary = document.createElement("div");
  app.appendChild(cardsSecondary);
  

 


  

  firstView();

  window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  if (params.has("detalle")) {
    document.body.classList.add("detalle-pelicula");
  }
});

