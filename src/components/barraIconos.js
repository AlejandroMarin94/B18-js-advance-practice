import { cambioVista } from "../functions/cambio_Vista.js";
import { select } from "../functions/select.js";

export function barraIconos(container) {
  const contenedorIconos = document.createElement("div");
  contenedorIconos.className = "contenedor-iconos";

  const contenedorIconosSec = document.createElement("div");
  contenedorIconosSec.className = "contenedor-iconosSec";

  const contenedorTipovisualizacion = document.createElement("div");
  contenedorTipovisualizacion.className = "tipo-visualizacion";

  const iconoFiltroLista = document.createElement("img");
  iconoFiltroLista.classList.add("filtro-lista");
  iconoFiltroLista.setAttribute("src", "/list-layout.svg");

  const iconoFiltroGrid = document.createElement("img");
  iconoFiltroGrid.classList.add("filtro-grid");

  iconoFiltroGrid.setAttribute("src", "/grid-layout.svg");

  cambioVista(container, iconoFiltroGrid, "grid-view", "list-view");
  cambioVista(container, iconoFiltroLista, "list-view", "grid-view");

  contenedorIconosSec.appendChild(contenedorTipovisualizacion);
  contenedorIconosSec.appendChild(select());
  contenedorIconos.appendChild(contenedorIconosSec);
  contenedorTipovisualizacion.appendChild(iconoFiltroGrid);
  contenedorTipovisualizacion.appendChild(iconoFiltroLista);

  return contenedorIconos;
}
