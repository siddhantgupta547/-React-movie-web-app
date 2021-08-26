import React from 'react';
import {data} from '../data/data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  componentDidMount(){
    this.props.store.subscribe(()=>{
      console.log("updated");
      this.forceUpdate();
    })
    
    this.props.store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })
    console.log(this.props.store.getState());
  }

  render(){
    const movies= this.props.store.getState();
    {console.log(movies)}
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {this.props.store.getState().map((movie, index)=>{
              return <MovieCard 
              movie= {movie}
              key= {"movie"+index}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
