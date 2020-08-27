import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Header.css";
import db from "../firebase";

function Header() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

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
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center"
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* opional chaing not working in vs code - read more around it */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button" onClick={() => addToList(movie)}>
            Add To List
          </button>
        </div>
        <div className="banner__description">
          <p>{truncate(movie?.overview, 250)}</p>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Header;
