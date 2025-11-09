
import { getMovies } from "../api/apifetch.js";


export function createSelectEventistener(select){
    select.addEventListener("change", (lista)=>{
        const selectList = lista.target.value;  
        const container = document.querySelector(".contenedor-peliculas");
        getMovies(container, selectList);
    })
}


export function firstView(){

    console.log("ejecutando");
    
    const container = document.querySelector(".contenedor-peliculas")
    if(container){
    getMovies(container, "now_playing")

    } else{
        console.error("No se encontró el contenedor de películas");
    }}
