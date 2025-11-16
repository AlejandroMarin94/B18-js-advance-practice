export function barraIconosBack(containerPeliculas) {
 

  const contenedorTipovisualizacion = document.createElement("div");
  contenedorTipovisualizacion.className = "tipo-visualizacion";

  const iconoVolver = document.createElement("img");
  iconoVolver.classList.add("icono-volver");
  iconoVolver.setAttribute("src", "/left-arrow.svg");

  iconoVolver.addEventListener("click", () => {
    console.log("quiero volver atras");

    
    const detailsView = document.querySelector(".details-view");
    if (detailsView) {
      detailsView.classList.add("hidden");
      detailsView.innerHTML = "";
    }

  
    const containerHero = document.querySelector(".containerHero");
    if (containerHero) {
      containerHero.classList.remove("hidden");
    }

    
    document.body.classList.remove("detalle-pelicula");
    document.body.style.removeProperty("--fondo-pelicula");
  });

  contenedorTipovisualizacion.appendChild(iconoVolver);
  return contenedorTipovisualizacion;
}
