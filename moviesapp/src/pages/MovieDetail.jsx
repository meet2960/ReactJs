import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
} from "../Redux/movieSlice";
import { Col, Container, Row } from "reactstrap";
const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedData = useSelector(getSelectedMovieOrShow);
  console.log("SelectedData is ", selectedData);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id));
  }, [dispatch, id]);
  return (
    <Container fluid={true} className="flex-grow-1 secondary-text">
      <Container>
        <Row className="mt-5">
          <Col lg={3}>
            <div>
              <img
                src={selectedData.Poster}
                alt="main-img"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col lg={9}>
            <div>
              <h3 className="primary-text">{selectedData.Title}</h3>
              <Row className="my-3">
                <Col lg={"auto"}>
                  IMDB Rating <i className="fa fa-star text-warning"></i> :
                  {selectedData.imdbRating}
                </Col>
                <Col lg={"auto"}>
                  IMDB Votes <i className="fa fa-thumbs-up text-info"></i> :
                  {selectedData.imdbVotes}
                </Col>
                <Col lg={"auto"}>
                  Runtime <i className="fa fa-film text-white"></i> :{" "}
                  {selectedData.Runtime}
                </Col>
                <Col lg={"auto"}>
                  Year <i class="fa-regular fa-calendar text-white"></i> :{" "}
                  {selectedData.Year}
                </Col>
              </Row>
              <p className="text-justify primary-text">{selectedData.Plot}</p>

              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{selectedData.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{selectedData.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{selectedData.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{selectedData.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{selectedData.Awards}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default MovieDetail;
