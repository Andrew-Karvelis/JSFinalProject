const movieListElem = document.querySelector(".movie__list");
const id = localStorage.getItem("id");

let searchValue = document.querySelector(".search__value");

//950c424d API KEY

async function searchTerm(event)  {
    const movieId = event.target.value;
    getMovies(movieId);
    searchValue.innerHTML = movieId
}

function searchResult(searchValue) {
    return `<div class="results__bar">
                <h2>Search results for: <span class="purple search__value" onchange="searchTerm(event)">${searchValue}</span></h2>`;
}

async function getMovies(movieId) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=950c424d&s=${movieId}`);
    const movieData = await movies.json();
    movieListElem.innerHTML = movieData.Search.map((movie) => getMovieDescription(movie)).join("");
}

function getMovieDescription(movie) {
   return `<div class="movie">
        <figure>
            <img
            src="${movie.Poster}"
            alt=""
            class="movie__img"
            />
        </figure>
        <div class="movie__description--list">
            <h3 class="movie__description movie__title">${movie.Title}</h3>
            <p class="movie__description movie__year"><span class="movie__description--heading">Type:</span> ${movie.Type}</p>
            <p class="movie__description movie__year"><span class="movie__description--heading">Year:</span> ${movie.Year}</p>
            <p class="movie__description movie__year"><span class="movie__description--heading">IMDB ID:</span> ${movie.imdbID}</p>
        </div>
    </div>`;
}
getMovies();