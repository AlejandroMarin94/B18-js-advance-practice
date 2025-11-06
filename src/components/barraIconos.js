
export function barraIconos(container) {
  const contenedorIconos = document.createElement("div");
  contenedorIconos.className = "contenedor-iconos";

  const contenedorIconosSec = document.createElement("div");
  contenedorIconosSec.className = "contenedor-iconosSec";



  const contenedorTipovisualizacion = document.createElement("div");
  contenedorTipovisualizacion.className ="tipo-visualizacion"
  const iconoFiltroLista = document.createElement("img");
  iconoFiltroLista.className = "filtro-lista";
  iconoFiltroLista.setAttribute(
    "src",
    "/list-layout.svg"
  );

  const iconoFiltroGrid = document.createElement("img");
  iconoFiltroGrid.className = "filtro-grid";
  iconoFiltroGrid.setAttribute(
    "src",
    "/grid-layout.svg"
  );

  const contenedorSelect = document.createElement("div");
  contenedorSelect.className ="contenedor-select";
  const selectBusqueda = document.createElement("input");
  selectBusqueda.className ="select-busqueda";

  contenedorIconosSec.appendChild(contenedorTipovisualizacion);
  contenedorIconosSec.appendChild(contenedorSelect);
  contenedorSelect.appendChild(selectBusqueda);
  contenedorIconos.appendChild(contenedorIconosSec)
  contenedorTipovisualizacion.appendChild(iconoFiltroGrid);
  contenedorTipovisualizacion.appendChild(iconoFiltroLista);

  container.appendChild(contenedorIconos)

  return contenedorIconos;

}
