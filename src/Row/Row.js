import React, { useEffect, useState, useImperativeHandle } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import MovieInfo from "./MovieInfo";
import "./Row.css";

const base_url = "http://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // const [trailer, setTrailer] = useState("");
  const [movieInfo, setMovieInfo] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1
  //   }
  // };

  console.log("MOVIES", movies);

  const handleClick = movie => {
    if (movieInfo) {
      setMovieInfo("");
    } else {
      setMovieInfo(movie);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          <div className="row__posterContainer">
            <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie.name} />
            {!isLargeRow && <p className="row__posterInfo">{movie?.title || movie?.name || movie?.original_name}</p>}
          </div>
        ))}
      </div>
      {/* Youtube / Trailer videos */}
      {/* {trailer && <Youtube videoId={trailer} opts={opts} />} */}
      {/* More Info Section */}
      {movieInfo && <MovieInfo movie={movieInfo} />}
    </div>
  );
}

export default Row;
