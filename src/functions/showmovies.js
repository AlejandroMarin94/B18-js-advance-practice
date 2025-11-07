export function showmovies(movies, container){
    movies.forEach(movie=>{
        const cardPeli = cardPpal(movie);
        container.appendChild(cardPeli);
    })
}