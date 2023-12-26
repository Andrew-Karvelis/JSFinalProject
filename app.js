async function getMovies() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=950c424d");
    const movieData = await movies.json();

    console.log(movieData);
}

getMovies();

