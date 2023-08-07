import React from "react";
import HomeBanner from "../../components/Home/HomeBanner";
import LatestMovies from "../../components/Home/LatestMovies";

const Home = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <LatestMovies />
    </React.Fragment>
  );
};

export default Home;
