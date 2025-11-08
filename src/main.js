import { barraIconos } from './components/barraIconos.js'
import { firstView } from './functions/evenlistener.js';
import './scss/style.scss'






document.querySelector('#app').innerHTML = `
`
const firsView = firstView()

const containerPeliculas = document.createElement("div");
containerPeliculas.className = "contenedor-peliculas";

barraIconos(document.querySelector("#app"))

document.querySelector("#app").appendChild(containerPeliculas);
firstView();






