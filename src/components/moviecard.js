function cardPpal(movie, container){
    const containerCard = document.createElement("div");
    containerCard.className = "container-card";

    const containerInformation = document.createElement("div");
    containerInformation.className = "container-information";

    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", )


    const titleCard = document.createElement("h1");
    titleCard.className = "title-card"
    titleCard.textContent = movie.title

    const ratingAndDate = document.createElement("p")
    ratingAndDate.className = "rating-date"
    ratingAndDate.textContent = `Rating: ${data.vote_average} Date: ${data.release_date}`

    const overview = document.createElement("p");
    overview.className = "overview"
    overview.textContent = `${data.overview}`


    container.appendChild(containerCard);
    containerInformation.appendChild(imgCard);
    containerInformation.appendChild(titleCard);
    containerInformation.appendChild(overview);
    containerCard.appendChild(containerInformation);

    return containerCard;






}