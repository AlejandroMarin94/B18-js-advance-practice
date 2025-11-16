import { uploadDetails } from "../functions/evenlistener";

export function cardPpal(movie) {
  const containerCard = document.createElement("div");
  containerCard.className = "container-card";

  const containerInformation = document.createElement("div");
  containerInformation.className = "container-information";

  const imgCard = document.createElement("img");
  imgCard.className =("imgCard");
  imgCard.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  );
  imgCard.id = movie.id;
  uploadDetails(imgCard,movie);

  const textnoImage = document.createElement("div");
  textnoImage.className= "textNoImage";

  const titleCard = document.createElement("h1");
  titleCard.className = "title-card";
  titleCard.textContent = movie.title;

  const ratingAndDate = document.createElement("p");
  ratingAndDate.className = "rating-date";
  const year = movie.release_date.split("-")[0];
  ratingAndDate.textContent = `Rating: ${movie.vote_average} | ${year}`;

  const overview = document.createElement("p");
  overview.className = "overview";
  overview.textContent = `${movie.overview}`;

  containerInformation.appendChild(imgCard);
  containerInformation.appendChild(textnoImage);
  textnoImage.appendChild(titleCard);
  textnoImage.appendChild(ratingAndDate);
  textnoImage.appendChild(overview);
  containerCard.appendChild(containerInformation);

  return containerCard;
}
