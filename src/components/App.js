import React from 'react';
import {data} from '../data/data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, addFavourite, removeFavourite, showFavourite } from '../actions/index'

class App extends React.Component {
  componentDidMount(){
    this.props.store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    
    this.props.store.dispatch(addMovies(data));
    //console.log(this.props.store.getState().movies);
  }

  handleFavouriteClick=(movie)=>{
    //console.log(this);
    const {favourites}= this.props.store.getState().movies;
    //console.log(favourites);
    if(favourites.indexOf(movie)===-1)
    {
      this.props.store.dispatch(addFavourite(movie));
      return;
    }
    else
    {
      this.props.store.dispatch(removeFavourite(movie));
      return;
    }
  }

  isMovieFavourite=(movie)=>{
    if(this.props.store.getState().movies.favourites.indexOf(movie)===-1)
    {
      return false;
    }
    else
    {
      return true;
    }
  }


  showFav=(val)=>{
    console.log(val);
    this.props.store.dispatch(showFavourite(val));
    return;
  }

  render(){
    // const movies= this.props.store.getState().movies;
    // {console.log(movies)}
    const { movies }= this.props.store.getState();
    const { list, favourites, showFavourites }= movies;
    console.log(showFavourites,list);
    //console.log(this.props.store.getState().favourites);
    const displayMovies= showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick= {()=>this.showFav(false)}>Movies</div>
            <div className="tab" onClick= {()=>this.showFav(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index)=>{
              return <MovieCard 
              movie= {movie}
              key= {"movie"+index}
              handleFavouriteClick= {this.handleFavouriteClick}
              favourite= {this.isMovieFavourite(movie)}
              />
            })}
            <div>{displayMovies.length===0 && <h4>No Movies to show</h4>}</div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
