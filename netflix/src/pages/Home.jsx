import React, { useEffect, useState } from "react";
import axios from "../api/axios.js";

const Home = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  useEffect(() => {
    async function fetchLatestTrending() {
      const response = await axios.get(
        `/trending/all/week?api_key=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&language=en-US`
      );
      setLatestMovies(response.data.results);
      console.log("Response of Trending", response);
    }
    fetchLatestTrending();
    console.log("Latest", latestMovies);
  }, []);
  return (
    <React.Fragment>
      <div
        className="home__banner flex justify-center items-center"
        style={{
          backgroundColor: `rgba:(0,0,0,0.5)`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${latestMovies[4]?.backdrop_path}")`,
        }}
      >
        <div className="fade">
          <div className="container">
            <div className="banner__content w-1/2">
              <h1 className="banner__title font-bold text-5xl">
                {latestMovies[0]?.title}
              </h1>
              <div className="banner__button__list">
                <button className="banner__button me-3">Play</button>
                <button className="banner__button">My List</button>
              </div>
              <p className="banner__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti, veritatis!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lists">123465789</div>
    </React.Fragment>
  );
};

export default Home;
