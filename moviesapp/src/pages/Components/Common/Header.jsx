import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import userImg from "../../../assets/images/userimage.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Container fluid={true}>
        <NavLink className="navbar-brand" href="#">
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
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
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
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="button">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
