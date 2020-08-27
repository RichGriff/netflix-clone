import React, { useState, useEffect } from "react";
import "./App.css";
import requests from "./requests";

import Nav from "./Nav/Nav";
import Header from "./Header/Header";
import Row from "./Row/Row";
import MyList from "./MyList/MyList";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      {/* TODO: Only show MY LIST this when user logged in */}
      <MyList />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
