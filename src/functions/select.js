import { moviesList } from "../api/apiconfig";

export function select(container){
    const contenedorSelect = document.createElement("div");
  contenedorSelect.className ="contenedor-select";
  const selectBusqueda = document.createElement("select");
  selectBusqueda.className ="select-busqueda";

  Object.entries(moviesList).forEach(([label,value])=>{
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    selectBusqueda.appendChild(option)
  })

  contenedorSelect.appendChild(selectBusqueda)
  return contenedorSelect;

}