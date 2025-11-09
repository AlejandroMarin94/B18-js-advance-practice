import { barraIconos } from "./components/barraIconos.js";
import { firstView } from "./functions/evenlistener.js";
import "./scss/style.scss";


  document.querySelector("#app").innerHTML = `
`;

  const containerPeliculas = document.createElement("div");
  containerPeliculas.classList.add("contenedor-peliculas", "grid-view");
 

  const barra = barraIconos(containerPeliculas);
  const app = document.querySelector("#app");

  app.appendChild(barra);
  app.appendChild(containerPeliculas);

  firstView();

