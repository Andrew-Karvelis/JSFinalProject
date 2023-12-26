const movieListElem = document.querySelector(".movie__list")
const id = localStorage.getItem("id");
//950c424d

async function searchTerm(event)  {
    const movieId = event.target.value
    getMovies(movieId)
}

async function getMovies(movieId) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=950c424d&s=${movieId}`);
    const movieData = await movies.json()
    // return await movies.json()
    movieListElem.innerHTML = movieData.map((movie) => getMovieDescription(movie)).join("")
    console.log(data)
}

function getMovieDescription(movie) {
    `<div class="movie">
        <figure>
            <img
            src=""
            alt=""
            class="movie__img"
            />
        </figure>
        <div class="movie__description--list">
            <p class="movie__description movie__title"><span class="movie__description--heading">Title:</span> ${movie.Title}</h3>
            <p class="movie__description movie__year"><span class="movie__description--heading">Year:</span> ${movie.Year}</p>
            <p class="movie__description movie__rated"><span class="movie__description--heading">Rating:</span> ${movie.Rated}</p>
            <p class="movie__description movie__runtime"><span class="movie__description--heading">Runtime:</span> ${movie.Runtime}</p>
            <p class="movie__description movie__genre"><span class="movie__description--heading">Genre:</span> ${movie.Genre}</p>
            <p class="movie__description movie__director"><span class="movie__description--heading">Director:</span> ${movie.Director}</p>
            <p class="movie__description movie__actors"><span class="movie__description--heading">Actors:</span> ${movie.Actors}</p>
            <p class="movie__description movie__plot"><span class="movie__description--heading">Plot:</span> ${movie.Plot}</p>
            <div class="movie__ratings">
                <div class="movie__rating movie__rating__0">
                    <h3 class="purple movie__rating--title">Source: ${movie.Source}</h3>
                    <p class="movie__rating--para">${movie.Value}</p>
                </div>
                <div class="movie__rating movie__rating__1">
                    <h3 class="purple movie__rating--title">Source: ${movie.Source}</h3>
                    <p class="movie__rating--para">${movie.Value}</p>
                </div>
                <div class="movie__rating movie__rating__2">
                    <h3 class="purple movie__rating--title">Source: ${movie.Source}</h3>
                    <p class="movie__rating--para">${movie.Value}</p>
                </div>
            </div>
        </div>
    </div>`
}
getMovies();
