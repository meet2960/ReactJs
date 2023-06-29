import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../../../Redux/movieSlice";
import userImg from "../../../assets/images/userimage.png";
const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    if (searchTerm.length <= 2) {
      console.log("Enter More");
      dispatch(fetchAsyncMovies("mission"));
      dispatch(fetchAsyncShows("mission"));
    } else {
      console.log("Search Term", searchTerm);
      dispatch(fetchAsyncMovies(searchTerm));
      dispatch(fetchAsyncShows(searchTerm));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      console.log("Please enter Search term");
    } else {
      console.log("Search Term", searchTerm);
      dispatch(fetchAsyncMovies(searchTerm));
      dispatch(fetchAsyncShows(searchTerm));
      setSearchTerm("");
    }
  };
  return (
    <nav className="navbar navbar-expand-lg secondary-bg">
      <Container fluid={true}>
        <NavLink to={"/"} className="navbar-brand" href="#">
          Movies Zone
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Trending
              </NavLink>
            </li>
          </ul>
          <div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search Movies or Show"
                value={searchTerm}
                // onChange={(e) => handleChange(e)}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => submitHandler(e)}
              >
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          <div className="d-flex align-items-center">
            <div className="form-check form-switch me-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
            </div>
            <div>
              <img
                src={userImg}
                alt="user-img"
                className="img-fluid avatar-xs"
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
