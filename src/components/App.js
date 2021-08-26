import React from 'react';
import {data} from '../data/data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, addFavourite } from '../actions/index'

class App extends React.Component {
  componentDidMount(){
    this.props.store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    
    this.props.store.dispatch(addMovies(data));
    console.log(this.props.store.getState().movies);
  }

  handleFavouriteClick=(movie)=>{
    //console.log(this);
    this.props.store.dispatch(addFavourite(movie));
    return;
  }

  render(){
    // const movies= this.props.store.getState().movies;
    // {console.log(movies)}
    console.log("RENDERED");
    console.log(this.props.store.getState().favourites);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {this.props.store.getState().movies.map((movie, index)=>{
              return <MovieCard 
              movie= {movie}
              key= {"movie"+index}
              handleFavouriteClick= {this.handleFavouriteClick}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
