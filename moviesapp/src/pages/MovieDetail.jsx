import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../Redux/movieSlice";
import { Col, Container, Row } from "reactstrap";
import Loader from "./Components/Common/Loader";
const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedData = useSelector(getSelectedMovieOrShow);
  console.log("SelectedData is ", selectedData);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, id]);
  return (
    <>
      {Object.keys(selectedData).length === 0 ? (
        <div className="flex-grow-1 d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <Container fluid={true} className="flex-grow-1 secondary-text">
          <Container>
            <Row className="mt-4">
              <Col lg={3}>
                <div className="d-flex justify-content-center">
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
                      Year <i className="fa-regular fa-calendar text-white"></i>{" "}
                      : {selectedData.Year}
                    </Col>
                  </Row>
                  <p className="text-justify primary-text">
                    {selectedData.Plot}
                  </p>
                  <div className="movie-info">
                    <Row className="g-1">
                      <Col xs={6} md={4} lg={2}>
                        <span>Director</span>
                      </Col>
                      <Col xs={6} md={8} lg={9}>
                        <span>{selectedData.Director}</span>
                      </Col>
                      <Col xs={6} md={4} lg={2}>
                        <span>Stars</span>
                      </Col>
                      <Col xs={6} md={8} lg={9}>
                        <span>{selectedData.Actors}</span>
                      </Col>
                      <Col xs={6} md={4} lg={2}>
                        <span>Generes</span>
                      </Col>
                      <Col xs={6} md={8} lg={9}>
                        <span>{selectedData.Genre}</span>
                      </Col>
                      <Col xs={6} md={4} lg={2}>
                        <span>Languages</span>
                      </Col>
                      <Col xs={6} md={8} lg={9}>
                        <span>{selectedData.Language}</span>
                      </Col>
                      <Col xs={6} md={4} lg={2}>
                        <span>Awards</span>
                      </Col>
                      <Col xs={6} md={8} lg={9}>
                        <span>{selectedData.Awards}</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      )}
    </>
  );
};

export default MovieDetail;
