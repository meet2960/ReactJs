import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "reactstrap";
import MovieListing from "./Components/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from "../Redux/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const defaultMovieTerm = "mission";
  const defaultShowTerm = "game";
  useEffect(() => {
    dispatch(fetchAsyncMovies(defaultMovieTerm));
    dispatch(fetchAsyncShows(defaultShowTerm));
  }, [dispatch]);
  return (
    <Container fluid={true}>
      <MovieListing />
    </Container>
  );
};

export default Home;
