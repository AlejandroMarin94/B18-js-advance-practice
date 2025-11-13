export function barraIconosBack(containerPeliculas) {
 

  const contenedorTipovisualizacion = document.createElement("div");
  contenedorTipovisualizacion.className = "tipo-visualizacion";

  const iconoVolver = document.createElement("img");
  iconoVolver.classList.add("icono-volver");
  iconoVolver.setAttribute("src", "/left-arrow.svg");

  iconoVolver.addEventListener("click", () => {
    console.log("quiero volver atras");

    // Ocultar/eliminar el detailsView
    const detailsView = document.querySelector(".details-view");
    if (detailsView) {
      detailsView.classList.add("hidden");
      detailsView.innerHTML = "";
    }

    // 👇 Reactivar el containerHero entero
    const containerHero = document.querySelector(".containerHero");
    if (containerHero) {
      containerHero.classList.remove("hidden");
    }

    // Quitar fondo detalle
    document.body.classList.remove("detalle-pelicula");
    document.body.style.removeProperty("--fondo-pelicula");
  });

  contenedorTipovisualizacion.appendChild(iconoVolver);
  return contenedorTipovisualizacion;
}
