import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAVOURITE,
  ADD_MOVIE_FROM_SEARCH,
  SEARCH_FOR_TITLE,
} from "../actions/index";

const initialMovieState = { list: [], favourites: [], showFavourites: false };
const initialSearchState = { result: [] };

export function moviesReducer(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FAVOURITE:
      const filteredArray = [...state.favourites].filter((movie) => {
        if (movie.Title !== action.movie.Title) {
          return movie;
        }
      });
      return {
        ...state,
        favourites: filteredArray,
      };

    case SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.val,
      };

    case ADD_MOVIE_FROM_SEARCH:
      let addedMovie = [...state.list];
      addedMovie.unshift(action.movie);
      return {
        ...state,
        list: addedMovie,
      };
    default:
      return state;
  }

  // if(ADD_MOVIES===action.type)
  // {
  //     return {
  //         movies: action.movies,
  //         favourites:{}
  //     }
  // }
  // return state;
}

export function searchReducer(state = initialSearchState, action) {
  switch (action.type) {
    case SEARCH_FOR_TITLE:
      return {
        result: [action.movie],
      };
    case ADD_MOVIE_FROM_SEARCH:
      return {
        result: [],
      };
    default:
      return state;
  }
}

const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState,
};

// export function rootReducer(state= initialRootState, action){
//     return{
//         movies: moviesReducer(state.movies, action),
//         search: searchReducer(state.search, action)
//     }
// }

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});
