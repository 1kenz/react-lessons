import React, { useState, useEffect } from "react";
import { Card } from "../Card";
import axios from "axios";

const apiKey = "7fc8d00ab1302c6aa7da237d2810116e"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const CardList = () => {
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: "Star Wars", //TODO: from input
        },
      })
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.log(err));
    console.log(movieData);
  }, []);

  return (
    <>
      {movieData &&
        movieData.map((movie) => {
          return (
            <Card
              poster_path={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
            />
          );
        })}
    </>
  );
};

// adult: false
// backdrop_path: "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg"
// genre_ids: (3) [12, 28, 878]
// id: 11
// original_language: "en"
// original_title: "Star Wars"
// overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
// popularity: 70.593
// poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
// release_date: "1977-05-25"
// title: "Star Wars"
// video: false
// vote_average: 8.2
// vote_count: 14543
