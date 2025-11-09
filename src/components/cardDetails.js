import { createActorsGallery } from "./cardActorCast.js";

export function createDetailsCard(movie, castArray, castCrew) {
  const detailCard = document.createElement("div");
  detailCard.setAttribute("id", `details-${movie.id}`)


  
  detailCard.classList.add("tarjeta-detalles", "detail-card");

  const detailCardConex = document.createElement("div");
  detailCardConex. className ="detailCard-Conex";

  const detailCardImage = document.createElement("div");
  detailCardImage.className = "detailCard-image";

  const detailCardImageYcontent = document.createElement("div");
  detailCardImageYcontent.className = "detail-imageAndContent";

  const detailCardTitle = document.createElement("div");
 detailCardTitle.className = "detail-CardTitle";



  

  const detailCardOver = document.createElement("div");
  detailCardOver.className = "detail-CardOver";

  const detailCardRatingAndDate = document.createElement("div");
  detailCardRatingAndDate.className = "detail-RatingAndDate";

  const detailCardCast = document.createElement("div");
  detailCardCast.className = "detail-Cast";

  const detailCardCrew = document.createElement("div");
  detailCardCrew.className = "detail-Crew";





  

  const imgDetail = document.createElement("img");
  imgDetail.className = "img-detail";
  imgDetail.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

    detailCardImage.appendChild(imgDetail);

  

  const titleDetail = document.createElement("h1");
  titleDetail.className = "title-detail";
  titleDetail.textContent = movie.title;
  detailCardTitle.appendChild(titleDetail);

  const descriptionDetail = document.createElement("p");
  descriptionDetail.className = "description-detail";
  descriptionDetail.textContent = movie.overview;
  detailCardOver.appendChild(descriptionDetail)

  const { castSection, crewSection } = createActorsGallery(castArray, castCrew);
  detailCardCast.appendChild(castSection);
  detailCardCrew.appendChild(crewSection);
  
  detailCard.appendChild(detailCardConex);
  detailCardConex.appendChild(detailCardImage);
  detailCardConex.appendChild(detailCardImageYcontent);
  detailCardImageYcontent.appendChild(detailCardTitle);
  detailCardImageYcontent.appendChild(detailCardRatingAndDate);
  detailCardImageYcontent.appendChild(detailCardOver);
  detailCardImageYcontent.appendChild(detailCardCast);
  detailCardImageYcontent.appendChild(detailCardCrew);

  

  




  return detailCard;
}

