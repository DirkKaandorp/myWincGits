// haal de gegevens van mijn favoriete film op mbv imdb_id (= tt0078841);

async function getMovieNr5() {
  console.log('Bezig met poging film 5 op te halen...')
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/tt0078841?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
    if (!response.ok) {
      throw new Error(response.status)
    }
    const result = await response.json();
    let newH3 = document.createElement("h3");
    newH3.innerHTML = ("Mijn favoriete film is '" + result.original_title + "'.");
    let element = document.getElementById("favMovie");
    element.appendChild(newH3);
  } catch (error) {
    console.log(`Oeps, foutje! ${error}`)
  }
}

// haal de top-20 uit The Movie Db op
async function getMoviesTop20() {
  console.log('Bezig met films op te halen...')
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
    if (!response.ok) {
      throw new Error(response.status)
    }
    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    console.log(`Oeps, foutje! ${error}`)
  }
}

// maak li-items van de top-10 uit The Movie Db en zet ze in een <ul> in de DOM 
async function showTopTenMovies() {
  const a = await getMoviesTop20();

  const topTenMovies = a.results;

  let newUL = document.createElement('ul');
  newUL.className = "movielist";
  let element = document.getElementById('top10');
  let newH3 = document.createElement("h3");
  newH3.innerText = "De algemene top-10 van The Movie DB";
  element.appendChild(newH3);
  element.appendChild(newUL);

  // variant voor deze selectie uit alle films (top-10)
  for (let i = 0; i < 10; i++) {
    let newLI = document.createElement('li');
    newLI.innerHTML = topTenMovies[i].original_title + " (rating: " + topTenMovies[i].vote_average + ")";
    newUL.appendChild(newLI)

    // // Variant voor ALLE 20 films
    // topTenMovies.forEach((movie) => {
    //   let newLI = document.createElement('li');
    //   newLI.innerHTML = movie.original_title, movie.vote_average;
    //   newUL.appendChild(newLI)
    // });
  }
}

// haal de top-rated action movies op uit The Movie Db
async function getTopRatedActionMovies() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1");
    if (!response.ok) {
      throw new Error(response.status)
    }
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.log(`Oops, something(s) went wrong! ${error}`)
  }
}


// maak li-items van de 10 highest-rated action movies uit The Movie Db en zet ze in een <ul> in de DOM 
async function showTopRatedActionMovies() {
  const a = await getTopRatedActionMovies();

  const topRatedActionMovies = a.results;

  let newUL = document.createElement('ul');
  newUL.className = "actionmovielist";
  let newH3 = document.createElement("h3");
  newH3.innerText = "De top-10 van actiefilms van The Movie DB";
  let element = document.getElementById('top10action');
  element.appendChild(newH3);
  element.appendChild(newUL);

  // variant voor top-10-selectie uit toprated action movies
  for (let i = 0; i < 10; i++) {
    let newLI = document.createElement('li');
    newLI.innerHTML = topRatedActionMovies[i].original_title + " (rating: " + topRatedActionMovies[i].vote_average + ")";
    newUL.appendChild(newLI)

    // // Variant voor alle top-rated films
    // topRatedActionMovies.forEach((movie) => {
    //   let newLI = document.createElement('li');
    //   newLI.innerHTML = movie.original_title + " (rating: " + movie.vote_average ")";
    //   newUL.appendChild(newLI)
    // });

  }
}

async function get1975Movies() {
  try {
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb&language=en-US&year=1975&include_adult=false&include_video=false&page=1");
    if (!response.ok) {
      throw new Error(response.status)
    }
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.log(`Oops, something(s) went wrong! ${error}`)
  }
}

async function show1975Movies() {
  const a = await get1975Movies();

  const listOf1975Movies = a.results;

  let newUL = document.createElement('ul');
  newUL.className = "listOf1975Movies";
  let newH3 = document.createElement("h3");
  newH3.innerText = "De films uit 1975 in The Movie DB";
  let element = document.getElementById('movies1975');
  element.appendChild(newH3);
  element.appendChild(newUL);
  listOf1975Movies.forEach((movie) => {
    let newLI = document.createElement('li');
    newLI.innerHTML = movie.original_title, movie.vote_average;
    newUL.appendChild(newLI)
  });
}


// // haal een film op uit The Movie Db
// async function getMovieNr1() {
//   // console.log('Bezig met poging film 1 op te halen...')
//   try {
//     const response = await fetch("https://api.themoviedb.org/3/movie/tt0037674?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     console.log(result)
//     console.log('Film 1 is opgehaald.')
//   } catch (error) {
//     console.log(`Oeps, foutje! ${error}`)
//   }
// }


// // haal The Lion King (2019) op uit The Movie Db
// async function getMovieNr2() {
//   // console.log('Bezig met poging film 2 op te halen...')
//   try {
//     const response = await fetch("https://api.themoviedb.org/3/movie/tt6105098?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     console.log(result)
//     console.log('Film 2 is opgehaald.')
//   } catch (error) {
//     console.log(`Oeps, foutje! ${error}`)
//   }
// }


// // haal The Joker (2019) op uit The Movie Db
// async function getMovieNr3() {
//   // console.log('Bezig met poging film 3 op te halen...')
//   try {
//     const response = await fetch("https://api.themoviedb.org/3/movie/tt7286456?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     console.log(result)
//     console.log('Film 3 is opgehaald.')
//   } catch (error) {
//     console.log(`Oeps, foutje! ${error}`)
//   }
// }


// // haal Toy Story 4 (2019) op uit The Movie Db
// async function getMovieNr4() {
//   // console.log('Bezig met poging film 4 op te halen...')
//   try {
//     const response = await fetch("https://api.themoviedb.org/3/movie/tt1979376?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     console.log(result)
//     console.log('Film 4 is opgehaald.')
//   } catch (error) {
//     console.log(`Oeps, foutje! ${error}`)
//   }
// }