import React, { useEffect } from "react";
import EventIcon from "@material-ui/icons/Event";
import "./MovieInfo.css";
import db from "../firebase";

function MovieInfo({ movie }) {
  const addToList = movie => {
    db.collection("MyList").add({
      name: movie?.title || movie?.name || movie?.original_name,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date ? movie.release_date : "",
      firstAirDate: movie.first_air_date ? movie.first_air_date : "",
      user: "Richard G"
    });
  };

  return (
    <div className="movieInfo">
      <h1 className="movieInfo__title">{movie?.title || movie?.name || movie?.original_name}</h1>
      <div className="movieInfo__releaseDate">
        <EventIcon fontSize="small" />
        <p>{movie?.release_date || movie?.first_air_date}</p>
      </div>
      <p className="movieInfo__description">{movie.overview}</p>
      <button className="movieInfo__button">Trailer</button>
      <button className="movieInfo__button" onClick={() => addToList(movie)}>
        Add To List
      </button>
      {/* Image? */}
    </div>
  );
}

export default MovieInfo;
