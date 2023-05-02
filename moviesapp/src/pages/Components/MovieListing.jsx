import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../Redux/movieSlice";
import { Col, Container, Row } from "reactstrap";
import MovieCard from "./MovieCard";
import Loader from "./Common/Loader";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const renderMovies =
    movies.Response === "True"
      ? movies.Search.map((items, index) => {
          return (
            <Col lg={3} className="d-flex" key={index}>
              <MovieCard items={items} index={index} />
            </Col>
          );
        })
      : null;
  const renderShows =
    shows.Response === "True"
      ? shows.Search.map((items, index) => {
          return (
            <Col lg={3} className="d-flex" key={index}>
              <MovieCard items={items} index={index} />
            </Col>
          );
        })
      : null;
  return (
    <Container>
      <>
        {!renderMovies ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Loader />
          </div>
        ) : (
          <div>
            <h2 className="secondary-text my-3">Movies</h2>
            <Row className="g-3">{renderMovies}</Row>
          </div>
        )}
      </>
      <>
        {!renderShows ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Loader />
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="secondary-text my-3">Latest Shows</h2>
            <Row className="g-3 ">{renderShows}</Row>
          </div>
        )}
      </>
    </Container>
  );
};

export default MovieListing;
