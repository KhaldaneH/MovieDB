import React, { useEffect, useState } from "react";
import "./serie.css";
import { useParams } from "react-router-dom";

const Serie = () => {
  const [currentSeriesDetail, setSeries] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setSeries(data));
  };

  return (
    <div className="series">
      <div className="series__intro">
        <img
          className="series__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentSeriesDetail ? currentSeriesDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="series__detail">
        <div className="series__detailLeft">
          <div className="series__posterBox">
            <img
              className="series__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentSeriesDetail ? currentSeriesDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="series__detailRight">
          <div className="series__detailRightTop">
            <div className="series__name">
              {currentSeriesDetail ? currentSeriesDetail.name : ""}
            </div>
            <div className="series__tagline">
              {currentSeriesDetail ? currentSeriesDetail.tagline : ""}
            </div>
            <div className="series__rating">
              {currentSeriesDetail ? currentSeriesDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="series__voteCount">
                {currentSeriesDetail
                  ? "(" + currentSeriesDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="series__runtime">
              {currentSeriesDetail ? currentSeriesDetail.episode_run_time[0] + " mins" : ""}
            </div>
            <div className="series__releaseDate">
              {currentSeriesDetail ? "First air date: " + currentSeriesDetail.first_air_date : ""}
            </div>
            <div className="series__genres">
              {currentSeriesDetail && currentSeriesDetail.genres ? (
                currentSeriesDetail.genres.map((genre) => (
                  <>
                    <span className="series__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="series__detailRightBottom">
            <div className="synopsisText">Overview</div>
            <div>{currentSeriesDetail ? currentSeriesDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      </div>
      )
}

export default Serie;