import React from "react";
import { search, addMovieFromSearch } from "../actions/index";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }

  handleChange = (event) => {
    //console.log(event.target.value);
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSearch = () => {
    //console.log("button worked");
    this.setState((prevState) => {
      return { searchText: "" };
    });
    this.props.dispatch(search(this.state.searchText));
  };

  handleAddToMovies = (movie) => {
    //console.log("movie", movie);
    this.props.dispatch(addMovieFromSearch(movie));
  };

  render() {
    const searchResult = this.props.search.result;
    //console.log("result", searchResult);
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={() => this.handleSearch()}>
            Search
          </button>

          {searchResult.length &&
            searchResult.map((movie) => {
              return (
                <div className="search-results">
                  <div className="search-result">
                    <img src={movie.data.Poster} alt="search-pic" />
                    <div className="movie-info">
                      <span>{movie.data.Title}</span>
                      <button
                        onClick={() => this.handleAddToMovies(movie.data)}
                      >
                        Add to Movies
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Navbar;
