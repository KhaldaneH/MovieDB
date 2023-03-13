import React, { useEffect, useState } from 'react';
import SeriesCard from '../sercard/sercard';
import { Link } from "react-router-dom"
import "./series.css"

const PopularSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&page=2`);
      const data = await response.json();
      setSeries(data.results);
    };
    fetchSeries();
  }, []);

  return (
    <div className="popular_series">
      <div className='sersp'>
      <h2 className="sr">Top Series</h2>
      <Link to="/sersea" style={{textDecoration: "none" }} className="link"><span>Search</span></Link>
      <Link to="/sergen" style={{textDecoration: "none" }} className="link"><span>Genre</span></Link>
      <Link to="/serlan" style={{textDecoration: "none" }} className="link"><span>Language</span></Link>
      </div>
      <div className="series_grid">
        {series.map(series => (
          <SeriesCard series={series} />
        ))}
      </div>
    </div>
  );
};

export default PopularSeries;
