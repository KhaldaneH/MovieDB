import React, { useEffect, useState } from "react"
import "./sersea.css"
import axios from "axios"
import SeriesCard from "../sercard/sercard"

const SeriesSearch = () => {
  const [query, setQuery] = useState("o")
  const [series, setSeries] = useState([])

  useEffect(() => {
    const searchSeries = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}&page=1&include_adult=false`
      )

      setSeries(data.results)
    }

    searchSeries()
  }, [query])

  return (
    <div>
      <div className="searchBox">
        <input
          className="searchInput"
          type="text"
          placeholder="Search for a TV series"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button className="searchButton" href="#">
          <i className="material-icons">search</i>
        </button>
      </div>
      <div className="KH"></div>
      <div className="series__list">
        <div className="list__cards">
          {series.map((series) => (
            <SeriesCard series={series} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeriesSearch;
