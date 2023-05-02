import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";
import MovieListing from "./Components/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from "../Redux/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <Container fluid={true} className="">
      <MovieListing />
    </Container>
  );
};

export default Home;
