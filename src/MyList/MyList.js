import React, { useState, useEffect } from "react";
import db from "../firebase";
import "./MyList.css";

const base_url = "http://image.tmdb.org/t/p/original";

function MyList() {
  const [movieList, setMovieList] = useState([]);
  const [movieInfo, setMovieInfo] = useState("");

  useEffect(() => {
    db.collection("MyList").onSnapshot(snapshot =>
      setMovieList(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          overview: doc.data().overview,
          posterPath: doc.data().posterPath,
          airDate: doc.data().firstAirDate,
          releaseDate: doc.data().releaseDate
        }))
      )
    );
  }, []);

  const handleClick = movie => {
    if (movieInfo) {
      setMovieInfo("");
    } else {
      setMovieInfo(movie);
    }
  };

  console.log("My Movies >>>>>>>", movieList);

  return (
    <div className="myList">
      <h2>My List</h2>
      <div className="myList__posters">
        {movieList.map(movie => (
          <div className="myList__posterContainer">
            <img key={movie.id} onClick={() => handleClick(movie)} className={"myList__poster myList__posterLarge"} src={`${base_url}${movie?.posterPath}`} alt={movie.name} />
          </div>
        ))}
      </div>
      {/* {movieInfo && <MovieInfo movie={movieInfo} />} */}
    </div>
  );
}

export default MyList;
