import { moviesList } from "../api/apiconfig.js";
import { getMovies } from "../api/apifetch.js";

export function select(){
 
 

  const selectBusqueda = document.createElement("select");
  selectBusqueda.className ="select-busqueda";

  const arrayData = Object.entries(moviesList);
  console.log(arrayData);
  
  arrayData.forEach((option)=>{
    const selectOption = document.createElement("option");
    selectOption.setAttribute("value", option[1]);
    selectOption.textContent =option[0]
    selectBusqueda.appendChild(selectOption)
  })
  
  createSelectEventistener(selectBusqueda);
    console.log("probando");
    

    
    return selectBusqueda;
}

  

function createSelectEventistener(select){
    select.addEventListener("change", (e)=>{
        const selectList = e.target.value;
        const container = document.querySelector(".contenedor-peliculas");
        getMovies(container, selectList);
    })
}