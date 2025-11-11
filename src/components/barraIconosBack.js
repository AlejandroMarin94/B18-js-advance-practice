export function barraIconosBack() {
 

  const contenedorTipovisualizacion = document.createElement("div");
  contenedorTipovisualizacion.className = "tipo-visualizacion";

  const iconoVolver = document.createElement("img");
  iconoVolver.classList.add("icono-volver");
  iconoVolver.setAttribute("src", "/left-arrow.svg");

  

  




  contenedorTipovisualizacion.appendChild(iconoVolver);
  
  

  return contenedorTipovisualizacion;
}
