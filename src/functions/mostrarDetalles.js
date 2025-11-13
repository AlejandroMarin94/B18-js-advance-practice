import { createDetailsCard } from "../components/cardDetails";

export function mostrarDetalles(container, movie, cast, crew) {
 const detailCard = createDetailsCard(movie, cast, crew, container);

  const listView = container.querySelector(".list-view");
  const gridView = container.querySelector(".grid-view");

  // Buscar o crear detailsView fuera del contenedor de películas
  let detailsView = document.querySelector(".details-view");
  if (!detailsView) {
    detailsView = document.createElement("div");
    detailsView.className = "details-view";


  // 👇 Insertar justo después del containerHero
    const containerHero = document.querySelector(".containerHero");
    containerHero.insertAdjacentElement("afterend", detailsView);
  }

  // 👇 Ocultar el containerHero entero
  const containerHero = document.querySelector(".containerHero");
  if (containerHero) {
    containerHero.classList.add("hidden");
  }

  // Mostrar detalle
  detailsView.innerHTML = "";
  detailsView.appendChild(detailCard);
  detailsView.classList.remove("hidden");
}