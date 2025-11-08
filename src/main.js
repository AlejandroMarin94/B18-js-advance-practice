import { barraIconos } from './components/barraIconos'
import './scss/style.scss'






document.querySelector('#app').innerHTML = `
`
const containerPeliculas = document.createElement("div");
containerPeliculas.className = "contenedor-peliculas";

document.querySelector("#app").appendChild(containerPeliculas);




barraIconos(document.querySelector("#app"))
