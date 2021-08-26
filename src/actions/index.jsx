
//Action type "ADD_MOVIES"
export const ADD_MOVIES= 'ADD_MOVIES'

//Action Creator for "ADD_MOVIES"
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies
    }
}

//Action type "ADD_FAVOURITE"
export const ADD_FAVOURITE= 'ADD_FAVOURITE'

export function addFavourite(movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
}
