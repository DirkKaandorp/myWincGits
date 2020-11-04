// voeg de poster van alle films als <li> toe aan de <ul>
movies.forEach( (movie) => {
  let parent = document.getElementById("movie-list");
  let child = document.createElement("li");
  parent.appendChild(child);
//  child.innerHTML="<img src=\"" + movie.Poster + "alt=\"poster\">";
    child.innerHTML="<a href=\"https://www.imdb.com/title/" + movie.imdbID + "\"><img src=\"" + movie.Poster + "\"alt=\"...\"></a>"
});

let radioButtons = document.querySelectorAll(".filter-btn");
console.log(radioButtons); 

// itereer door de array radioButtons en maak eventListener vast aan elke button
radioButtons.forEach(radio => radio.addEventListener('change', handleOnChangeEvent));

// plak aan elk van de mogelijke keuzes een functie met bijpassende parameter
function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "newest":
      filterLatestMovies();
      break;
    case "avengers":
      filterMovies("avengers");
      break;
    case "x-men":
      filterMovies("x-men");
      break;
    case "princess":
      filterMovies("princess");
      break;
    case "batman": 
      filterMovies("batman");
      break;
    default:
      console.log("Geen films geselecteerd/No movies selected");
      console.log("Probeer opnieuw/Try again");
      break;
  }
}

// functie voor het verwijderen van de films die in de DOM (<ul id="movie-list">) zitten
function removePresentMovies() {
  let node = document.getElementById("movie-list");
  while (node.hasChildNodes()) {
  node.removeChild(node.lastChild);
  }
}

// functie voor het filteren van films op basis van onderwerp
function filterMovies(value) {
  // eerst de films verwijderen die NU in de DOM zitten
  removePresentMovies();

  // de films filteren op basis van de aangeklikte radio-button
  let filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(value));

  // nu de geselecteerde films in de DOM plaatsen
  filteredMovies.forEach( (movie) => {
    let parent = document.getElementById("movie-list");
    let child = document.createElement("li");
    parent.appendChild(child);
//    child.innerHTML="<img src=\"" + movie.Poster + "alt=\"poster\">";
    child.innerHTML="<a href=\"https://www.imdb.com/title/" + movie.imdbID + "\"><img src=\"" + movie.Poster + "\"alt=\"...\"></a>"
  });
}

// aparte functie voor het filteren van films van 2014 of later
function filterLatestMovies(value) {
  // eerst de films verwijderen die NU in de DOM zitten
  removePresentMovies();
  // de films filteren op basis van de aangeklikte radio-button
  let filteredLatestMovies = movies.filter(movie => parseInt(movie.Year) >= 2014);
  console.log(filteredLatestMovies);

  // nu de geselecteerde films in de DOM plaatsen
  filteredLatestMovies.forEach( (movie) => {
    let parent = document.getElementById("movie-list");
    let child = document.createElement("li");
    parent.appendChild(child);
//    child.innerHTML="<img src=\"" + movie.Poster + "alt=\"poster\">";  
    child.innerHTML="<a href=\"https://www.imdb.com/title/" + movie.imdbID + "\"><img src=\"" + movie.Poster + "\"alt=\"...\"></a>"
  });
}

// functie om img's te wrappen in een <a>-tag, incl. imbdID als href

let testMovie = movies[0].imdbID;
console.log(testMovie);
let link = "https://www.imdb.com/title/" + movies[0].imdbID + "/";
console.log(link);
let anchor = "<a href=\"" + link + "\"";
console.log(anchor);