
import { getMovies } from "../api/apifetch.js";


export function createSelectEventistener(select){
    select.addEventListener("change", (lista)=>{
        const selectList = lista.target.value;  
        const container = document.querySelector(".contenedor-peliculas");
        getMovies(container, selectList);
    })
}


export function firstView()
{ document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector(".contenedor-peliculas")
    getMovies(container, "now_playing")
})}