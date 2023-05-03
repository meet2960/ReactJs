import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/notes-icon.png";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white nav-bg">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="avatar-xxs me-2" />
          <NavLink to={"/"} className="navbar-brand" href="#">
            <h4 className="mb-0">NotesApp</h4>
          </NavLink>
        </div>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/home"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
            <li className="nav-item">
              <NavLink to="/edit" className="nav-link">
                Edit
              </NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
