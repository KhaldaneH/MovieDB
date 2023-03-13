import axios from 'axios';
import React, {useEffect, useState} from "react"
import SeriesCard from "../sercard/sercard"
import "./sertype.css"

const Serietype = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/genre/tv/list', {
      params: {
        api_key: '4e44d9029b1270a757cddc766a1bcb63',
      }
    })
    .then(res => {
      setGenres(res.data.genres);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/tv', {
      params: {
        api_key: '4e44d9029b1270a757cddc766a1bcb63',
        with_genres: selectedGenre,
      }
    })
    .then(res => {
      setSeries(res.data.results);
    })
    .catch(error => {
      console.log(error);
    });
  }, [selectedGenre]);

  return (
    <div>
      <div className='none'></div>
      <label className='cd'>
        {genres.map(genre => (
          <div className='cmd'>
            <button
              id="Hh"
              key={genre.id}
              className={genre.id === selectedGenre ? 'selected' : ''}
              onClick={() => setSelectedGenre(genre.id)}
            >
              {genre.name}
            </button>
          </div>
        ))}
      </label>
      <div className='none'></div>
      <div className="serie__list">
        <div className="list__cards">
          {series.map(series => (
            <SeriesCard series={series} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serietype;
