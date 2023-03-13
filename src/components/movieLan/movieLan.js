import React, { useState, useEffect } from 'react';
import Cards from "../card/card"
import "./movieLan.css"



const MovieLan = () => {
  const [movies, setMovies] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const API_KEY = '4e44d9029b1270a757cddc766a1bcb63';

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${selectedLanguage}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022&with_original_language=${selectedLanguage}`);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [selectedLanguage]);

  return (
    <div>
      <div className='none'></div>
      <div className='cmd'>
        <label className='cd'>
    <button
      id="button" 
      className={selectedLanguage === "en" ? "active" : ""}
      onClick={() => setSelectedLanguage("en")}
    >
      English
    </button>
    <button
      id="button" 
      className={selectedLanguage === "fr" ? "active" : ""}
      onClick={() => setSelectedLanguage("fr")}
    >
      French
    </button>
    <button
      id="button" 
      className={selectedLanguage === "de" ? "active" : ""}
      onClick={() => setSelectedLanguage("de")}
    >
      German
    </button>
    <button
      id="button" 
      className={selectedLanguage === "ar" ? "active" : ""}
      onClick={() => setSelectedLanguage("ar")}
    >
      Arabic
    </button>
    <button
      id="button" 
      className={selectedLanguage === "es" ? "active" : ""}
      onClick={() => setSelectedLanguage("es")}
    >
      Spanish
    </button>
    <button
      id="button" 
      className={selectedLanguage === "zh" ? "active" : ""}
      onClick={() => setSelectedLanguage("zh")}
    >
      Chinese
    </button>
    <button
      id="button" 
      className={selectedLanguage === "ko" ? "active" : ""}
      onClick={() => setSelectedLanguage("ko")}
    >
      Korean
    </button>
    </label>
  </div>
      
      <div className="movie__list">
      <h2>POPULAR</h2>
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

export default MovieLan;
