import React, {useEffect, useState} from "react"
import "./moviesearch.css"
import axios from "axios";
import Cards from "../card/card"



const MovieSearch = () => {
  const [query, setQuery] = useState("H");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}&page=1&include_adult=false`
      );

      setMovies(data.results);
    };

    searchMovies();
  }, [query]);

  return (
    <div>
      <div className="searchBox">
        <input className="searchInput"
          type="text"
          placeholder="Search for a movie"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="searchButton" href="#">
                <i className="material-icons">
                    search
                </i>
            </button>
        </div>
        <div className="KH"></div>
      <div className="movie__list">
            <div className="list__cards">
                {
                    movies.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default MovieSearch;

