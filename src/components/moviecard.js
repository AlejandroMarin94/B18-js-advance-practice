export function cardPpal(movie){
    const containerCard = document.createElement("div");
    containerCard.className = "container-card";

    const containerInformation = document.createElement("div");
    containerInformation.className = "container-information";

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", `https://image.tmdb.org/t/p/w500${movie.poster_path}` )


    const titleCard = document.createElement("h1");
    titleCard.className = "title-card"
    titleCard.textContent = movie.title

    const ratingAndDate = document.createElement("p")
    ratingAndDate.className = "rating-date"
    ratingAndDate.textContent = `Rating: ${movie.vote_average} Date: ${movie.release_date}`

    const overview = document.createElement("p");
    overview.className = "overview"
    overview.textContent = `${movie.overview}`


    containerInformation.appendChild(imgCard);
    containerInformation.appendChild(titleCard);
    containerInformation.appendChild(overview);
    containerCard.appendChild(containerInformation);
    


    return containerCard;






}