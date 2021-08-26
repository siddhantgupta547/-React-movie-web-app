function movies(state= [], action){
    if('ADD_MOVIES'===action.type)
    {
        return action.movies;
    }
    return state;
}

export default movies;