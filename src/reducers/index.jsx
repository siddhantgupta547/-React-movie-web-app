import { ADD_MOVIES, ADD_FAVOURITE } from '../actions/index'

function movies(state= { movies: [], favourites: [] } , action){
    
    switch (action.type) {
        case ADD_MOVIES:
            return {
                movies: action.movies,
                favourites:[]
            }
            break;

        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie]
            }
            break;
    
        default:
            return state;
            break;
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