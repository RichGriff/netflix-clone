import React, { useEffect } from "react";
import EventIcon from "@material-ui/icons/Event";
import "./MovieInfo.css";

function MovieInfo({ movie }) {
  return (
    <div className="movieInfo">
      <h1 className="movieInfo__title">{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className="movieInfo__releaseDate">
        <EventIcon fontSize="small" />
        <p>{movie?.release_date || movie?.first_air_date}</p>
      </div>
      <p className="movieInfo__description">{movie.overview}</p>
      <button className="movieInfo__button">Trailer</button>
      <button className="movieInfo__button">My List</button>
      {/* Image? */}
    </div>
  );
}

export default MovieInfo;
