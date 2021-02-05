// const myApiKey = "4ba7d3b5cecdf7950d04bb83714dfdcb";

async function getData() {
  // console.log('Trying to fetch data...')
  try {
    // const apiUrl = "https: //api.themoviedb.org/3/genre/movie/list";
    const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=4ba7d3b5cecdf7950d04bb83714dfdcb");
    if (!response.ok) {
      throw new Error(response.status)
    }
    const result = await response.json();
    console.log(result)
  } catch (error) {
    console.log(`Oops, something(s) went wrong! ${error}`)
  }
}

getData();