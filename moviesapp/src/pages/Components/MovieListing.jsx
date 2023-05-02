import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../Redux/movieSlice";
import { Col, Container, Row } from "reactstrap";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const renderMovies =
    movies.Response === "True"
      ? movies.Search.map((items, index) => {
          return (
            <Col lg={3} className="d-flex">
              <MovieCard items={items} index={index} />
            </Col>
          );
        })
      : null;
  return (
    <Container>
      <h2 className="secondary-text my-3">Movies</h2>
      <Row className="g-3 ">{renderMovies}</Row>
    </Container>
  );
};

export default MovieListing;
