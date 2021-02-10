async function getMoviesTop20() {
  console.log('Bezig met films op te halen...')
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
    if (!response.ok) {
      throw new Error(response.status)
    }
    const result = await response.json();
    // console.log(result);
    return result
  } catch (error) {
    console.log(`Oeps, foutje! ${error}`)
  }
}


// async function getData() {
//   console.log('Trying to fetch genre data...')
//   try {
//     // const apiUrl = "https: //api.themoviedb.org/3/genre/movie/list";
//     const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     console.log(result)
//   } catch (error) {
//     console.log(`Oops, something(s) went wrong! ${error}`)
//   }
// }

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


// async function getMovieNr5() {
//   console.log('Bezig met poging film 5 op te halen...')
//   try {
//     const response = await fetch("https://api.themoviedb.org/3/movie/tt0078841?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const result = await response.json();
//     let nieuweH1 = document.createElement("h1");
//     nieuweH1.innerHTML = ("Mijn favoriete film is '" + result.original_title + "'.");
//     let element = document.getElementById("favMovie");
//     element.appendChild(nieuweH1);
//   } catch (error) {
//     console.log(`Oeps, foutje! ${error}`)
//   }
// }




// let newUL = document.createElement('ul');
// let element = document.getElementById('top10');
// element.appendChild(newUL);
// console.log(result);
// // let moviesSortedByRatings = result.sort((a, b) => (a.vote_average > b.vote_average) ? 1 : -1)
// console.log(`Topfavoriet: ${result[0]}.`);
// for (let i = 0; i < 10; i++) {
//   let newLI = document.createElement('li');
//   newLI.innerHTML = result[i].original_title, vote_average;
//   newUL.appendChild(newLI)
// }