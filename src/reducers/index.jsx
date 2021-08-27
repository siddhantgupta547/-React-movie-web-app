import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITE } from '../actions/index'

function movies(state= { movies: [], favourites: [], showFavourites: false } , action){
    
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                movies: action.movies
            }

        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        
        case REMOVE_FAVOURITE:
            const filteredArray= [...state.favourites].filter((movie)=>{
                if(movie.Title!==action.movie.Title){
                    return movie;
                }
            })
            return{
                ...state,
                favourites: filteredArray
            }

        case SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites: action.val
            }

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

export default movies;