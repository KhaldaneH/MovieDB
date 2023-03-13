import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./sercard.css";

const SeriesCard = ({ series }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
        to={`/series/${series.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards__img"
              src={`https://image.tmdb.org/t/p/w500/${
                series ? series.poster_path : ""
              }`}
              alt={series ? series.name : ""}
            />
            <div className="cards__overlay">
              <div className="card__title">{series ? series.name : ""}</div>
              <div className="card__runtime">
                {series ? series.release_date : ""}
                <span className="card__rating">
                  {series ? series.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__description">
                {series ? series.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default SeriesCard;
