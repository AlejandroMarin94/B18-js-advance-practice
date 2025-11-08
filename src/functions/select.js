import { moviesList } from "../api/apiconfig.js";
import { getMovies } from "../api/apifetch.js";
import { createSelectEventistener } from "./evenlistener.js";

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
    selectBusqueda.value ="now_playing";

  
  createSelectEventistener(selectBusqueda);
    console.log("probando");
    

    
    return selectBusqueda;
}

  

