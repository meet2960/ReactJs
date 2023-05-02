import React, { useEffect } from "react";
import movieApi from "../utils/Apis/movieApi";
import { APIKEY } from "../utils/Apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../Redux/movieSlice";
import { Container } from "reactstrap";
import MovieListing from "./Components/MovieListing";
const Home = () => {
  const dispatch = useDispatch();

  const searchTerm = "harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${searchTerm}&type=movie`)
        .catch((err) => {
          console.log("Error", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <Container fluid={true} className="">
      <MovieListing />
    </Container>
  );
};

export default Home;
