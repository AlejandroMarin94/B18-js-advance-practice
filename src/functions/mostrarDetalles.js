import { createDetailsCard } from "../components/cardDetails";

export function mostrarDetalles(container, movie, cast, crew) {
 const detailCard = createDetailsCard(movie, cast, crew, container);

  const listView = container.querySelector(".list-view");
  const gridView = container.querySelector(".grid-view");

  
  let detailsView = document.querySelector(".details-view");
  if (!detailsView) {
    detailsView = document.createElement("div");
    detailsView.className = "details-view";


 
    const containerHero = document.querySelector(".containerHero");
    containerHero.insertAdjacentElement("afterend", detailsView);
  }

  
  const containerHero = document.querySelector(".containerHero");
  if (containerHero) {
    containerHero.classList.add("hidden");
  }

  // Mostrar detalle
  detailsView.innerHTML = "";
  detailsView.appendChild(detailCard);
  detailsView.classList.remove("hidden");
}