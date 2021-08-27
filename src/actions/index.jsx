
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

//Action type "REMOVE_FAVOURITE"
export const REMOVE_FAVOURITE= 'REMOVE_FAVOURITE'

export function removeFavourite(movie){
    return{
        type: REMOVE_FAVOURITE,
        movie
    }
}

//Action type "REMOVE_FAVOURITE"
export const SHOW_FAVOURITE= 'SHOW_FAVOURITE'

export function showFavourite(val){
    return{
        type: SHOW_FAVOURITE,
        val
    }
}