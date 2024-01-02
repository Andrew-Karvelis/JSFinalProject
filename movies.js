//950c424d API KEY
const movieListElem = document.querySelector(".movie__list");
const searchValue = document.querySelector(".search__value");
const n = 6;
let movieData = {};

//SEARCH BAR
async function searchTerm(event) {
  const movieId = event.target.value;
  getMovies(movieId);
  searchValue.innerHTML = movieId;
}

function renderMovies() {

  if (movieData.Search) {
    movieListElem.innerHTML = movieData.Search.map((movie) =>
      getMovieDescription(movie)
    )
      .slice(0, n)
      .join("");

      document.querySelector('.no__movies--container').style.display = 'none';
      movieListElem.style.display = 'block';
  } else {
    console.log("movie not found");

    document.querySelector('.no__movies--container').style.display = 'block';
    movieListElem.style.display = 'none';
  }
}

function searchResult(searchValue) {
  return `<div class="results__bar">
                <h2>Search results for: <span class="purple search__value" onchange="searchTerm(event)">${searchValue}</span></h2>`;
}

//FETCHING MOVIES FROM BACKEND
async function getMovies(movieId) {
  const movies = await fetch(
    `https://www.omdbapi.com/?apikey=950c424d&s=${movieId}`
  );
  movieData = await movies.json();
  setTimeout(() => {
    renderMovies();
  }, 1000);
}

//AMENDING HTML DYNAMICALLY
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
            <p class="movie__description movie__type"><span class="movie__description--heading">Type:</span> ${movie.Type}</p>
            <p class="movie__description movie__year"><span class="movie__description--heading">Year:</span> ${movie.Year}</p>
            <p class="movie__description movie__imdb-id"><span class="movie__description--heading">IMDB ID:</span> ${movie.imdbID}</p>
        </div>
    </div>`;
}

// DOUBLE RANGE SLIDER //
window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.getElementById("slider__1");
let sliderTwo = document.getElementById("slider__2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
}

function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
}

//DBL RANGE SLIDER SEARCH
function filterYear() {
  if (movieData && movieData.Search) {
    const filteredMovies = movieData.Search.filter(
      (movie) =>
        parseInt(sliderOne.value) <= parseInt(movie.Year) &&
        parseInt(sliderTwo.value) >= parseInt(movie.Year)
    );

  // movieData.Search = filteredMovies;

  renderFilteredMovies(filteredMovies);
    } else {
      console.log('Movie data or search results not available.');
    }
}
function renderFilteredMovies(filteredMovies) {
  movieListElem.innerHTML = filteredMovies
    .slice(0, n)
    .map((movie) => getMovieDescription(movie))
    .join("");
}
