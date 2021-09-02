import axios from "axios";

//Action type "ADD_MOVIES"
export const ADD_MOVIES = "ADD_MOVIES";

//Action Creator for "ADD_MOVIES"
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

//Action type "ADD_FAVOURITE"
export const ADD_FAVOURITE = "ADD_FAVOURITE";

export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie,
  };
}

//Action type "REMOVE_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie,
  };
}

//Action type "REMOVE_FAVOURITE"
export const SHOW_FAVOURITE = "SHOW_FAVOURITE";

export function showFavourite(val) {
  return {
    type: SHOW_FAVOURITE,
    val,
  };
}

export function search(title) {
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=38626987&t=${title}&json`;
  //console.log(url);
  return function (dispatch) {
    axios.get(url).then((movie) => {
      //console.log(movie);
      dispatch(searchTitle(movie));
    });
  };
}

//Action type "SEARCH_FOR_TITLE"
export const SEARCH_FOR_TITLE = "SEARCH_FOR_TITLE";

export function searchTitle(movie) {
  return {
    type: SEARCH_FOR_TITLE,
    movie,
  };
}

//Action type "ADD_MOVIE_FROM_SEARCH"
export const ADD_MOVIE_FROM_SEARCH = "ADD_MOVIE_FROM_SEARCH";

export function addMovieFromSearch(movie) {
  return {
    type: ADD_MOVIE_FROM_SEARCH,
    movie,
  };
}
