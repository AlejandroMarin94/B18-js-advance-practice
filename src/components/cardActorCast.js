export function createActorsGallery(castArray, crewArray){
const gallery = document.createElement("div");
  gallery.className = "actors-gallery";

  const castSection = document.createElement("div");
  castSection.className = "cast-section";

  const castTitle = document.createElement("h2");
  castTitle.textContent = "Actores";
  castSection.appendChild(castTitle);

  castArray.forEach(actor=>{
    const actorCard = document.createElement("div");
    actorCard.className = "actor-card";

    const actorImg = document.createElement("img");
    actorImg.className = "actor-img";
    actorImg.setAttribute("src", `https://image.tmdb.org/t/p/w185${actor.profile_path}`)

    const actorName = document.createElement("p");
    actorName.className = "actor-name";
    actorName.textContent = `${actor.name} como ${actor.character}`;

    actorCard.appendChild(actorImg);
    actorCard.appendChild(actorName);
    castSection.appendChild(actorCard);
   
  })

  const crewSection = document.createElement("div");
  crewSection.className = "crew-section";

  const crewtitle = document.createElement("h2");
  crewtitle.textContent ="Equipo Ténico";
  crewSection.appendChild(crewtitle);

  crewArray.forEach(person=>{
    if(!person.profile_path) return;

    const crewCard = document.createElement("div");
    crewCard.className= "crew-card";

    const crewImg = document.createElement("img");
    crewImg.className ="crew-img"
    crewImg.setAttribute("src",`https://image.tmdb.org/t/p/w185${person.profile_path}` )

    const crewName = document.createElement("p");
    crewName.className ="crew-name";
    crewName.textContent = `${person.name} → ${person.job}`


    crewCard.appendChild(crewImg);
    crewCard.appendChild(crewName);
    crewSection.appendChild(crewCard);
  })
  



  
  return {castSection, crewSection};
}
