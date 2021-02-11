"use strict";

// haal de gegevens van mijn favoriete film op mbv imdb_id (= tt0078841);
function getMovieNr5() {
  var response, result, newH3, element;
  return regeneratorRuntime.async(function getMovieNr5$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Bezig met poging film 5 op te halen...');
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/movie/tt0078841?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb"));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error(response.status);

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          result = _context.sent;
          newH3 = document.createElement("h3");
          newH3.innerHTML = "Mijn favoriete film is '" + result.original_title + "'.";
          element = document.getElementById("favMovie");
          element.appendChild(newH3);
          _context.next = 19;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](1);
          console.log("Oeps, foutje! ".concat(_context.t0));

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 16]]);
} // haal de top-20 uit The Movie Db op


function getMoviesTop20() {
  var response, result;
  return regeneratorRuntime.async(function getMoviesTop20$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Bezig met films op te halen...');
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb"));

        case 4:
          response = _context2.sent;

          if (response.ok) {
            _context2.next = 7;
            break;
          }

          throw new Error(response.status);

        case 7:
          _context2.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          result = _context2.sent;
          console.log(result);
          return _context2.abrupt("return", result);

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.log("Oeps, foutje! ".concat(_context2.t0));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14]]);
} // maak li-items van de top-10 uit The Movie Db en zet ze in een <ul> in de DOM 


function showTopTenMovies() {
  var a, topTenMovies, newUL, element, newH3, i, newLI;
  return regeneratorRuntime.async(function showTopTenMovies$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(getMoviesTop20());

        case 2:
          a = _context3.sent;
          topTenMovies = a.results;
          newUL = document.createElement('ul');
          newUL.className = "movielist";
          element = document.getElementById('top10');
          newH3 = document.createElement("h3");
          newH3.innerText = "De algemene top-10 van The Movie DB";
          element.appendChild(newH3);
          element.appendChild(newUL); // variant voor deze selectie uit alle films (top-10)

          for (i = 0; i < 10; i++) {
            newLI = document.createElement('li');
            newLI.innerHTML = topTenMovies[i].original_title + " (rating: " + topTenMovies[i].vote_average + ")";
            newUL.appendChild(newLI); // // Variant voor ALLE 20 films
            // topTenMovies.forEach((movie) => {
            //   let newLI = document.createElement('li');
            //   newLI.innerHTML = movie.original_title, movie.vote_average;
            //   newUL.appendChild(newLI)
            // });
          }

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
} // haal de top-rated action movies op uit The Movie Db


function getTopRatedActionMovies() {
  var response, result;
  return regeneratorRuntime.async(function getTopRatedActionMovies$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/discover/movie?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1"));

        case 3:
          response = _context4.sent;

          if (response.ok) {
            _context4.next = 6;
            break;
          }

          throw new Error(response.status);

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          result = _context4.sent;
          console.log(result);
          return _context4.abrupt("return", result);

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          console.log("Oops, something(s) went wrong! ".concat(_context4.t0));

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
} // maak li-items van de 10 highest-rated action movies uit The Movie Db en zet ze in een <ul> in de DOM 


function showTopRatedActionMovies() {
  var a, topRatedActionMovies, newUL, newH3, element, i, newLI;
  return regeneratorRuntime.async(function showTopRatedActionMovies$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getTopRatedActionMovies());

        case 2:
          a = _context5.sent;
          topRatedActionMovies = a.results;
          newUL = document.createElement('ul');
          newUL.className = "actionmovielist";
          newH3 = document.createElement("h3");
          newH3.innerText = "De top-10 van actiefilms van The Movie DB";
          element = document.getElementById('top10action');
          element.appendChild(newH3);
          element.appendChild(newUL); // variant voor top-10-selectie uit toprated action movies

          for (i = 0; i < 10; i++) {
            newLI = document.createElement('li');
            newLI.innerHTML = topRatedActionMovies[i].original_title + " (rating: " + topRatedActionMovies[i].vote_average + ")";
            newUL.appendChild(newLI); // // Variant voor alle top-rated films
            // topRatedActionMovies.forEach((movie) => {
            //   let newLI = document.createElement('li');
            //   newLI.innerHTML = movie.original_title + " (rating: " + movie.vote_average ")";
            //   newUL.appendChild(newLI)
            // });
          }

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function get1975Movies() {
  var response, result;
  return regeneratorRuntime.async(function get1975Movies$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.themoviedb.org/3/discover/movie?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb&language=en-US&year=1975&include_adult=false&include_video=false&page=1"));

        case 3:
          response = _context6.sent;

          if (response.ok) {
            _context6.next = 6;
            break;
          }

          throw new Error(response.status);

        case 6:
          _context6.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          result = _context6.sent;
          console.log(result);
          return _context6.abrupt("return", result);

        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          console.log("Oops, something(s) went wrong! ".concat(_context6.t0));

        case 16:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 13]]);
}

function show1975Movies() {
  var a, listOf1975Movies, newUL, newH3, element;
  return regeneratorRuntime.async(function show1975Movies$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(get1975Movies());

        case 2:
          a = _context7.sent;
          listOf1975Movies = a.results;
          newUL = document.createElement('ul');
          newUL.className = "listOf1975Movies";
          newH3 = document.createElement("h3");
          newH3.innerText = "De films uit 1975 in The Movie DB";
          element = document.getElementById('movies1975');
          element.appendChild(newH3);
          element.appendChild(newUL);
          listOf1975Movies.forEach(function (movie) {
            var newLI = document.createElement('li');
            newLI.innerHTML = movie.original_title, movie.vote_average;
            newUL.appendChild(newLI);
          });

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  });
} // // haal een film op uit The Movie Db
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