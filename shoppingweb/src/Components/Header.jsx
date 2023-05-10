import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLayoutMode } from "../Redux/layouts/layout";
import { NavLink } from "react-router-dom";
import { Input } from "reactstrap";

const Header = () => {
  const dispatch = useDispatch();
  const { layoutType } = useSelector((state) => ({
    layoutType: state.layout.layoutModeType,
  }));
  useEffect(() => {
    if (layoutType) {
      // ? Get the current layout mode, then set it
      document.body.setAttribute("data-layout-mode", layoutType);
    }
    console.log("Inside Header Component", layoutType);
  }, [layoutType]);
  const handleThemeChange = (e) => {
    e.preventDefault();
    if (layoutType === "light") {
      dispatch(changeLayoutMode("dark"));
    } else {
      dispatch(changeLayoutMode("light"));
    }
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg nav-bg">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand" href="#">
            ECart
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  What's New
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <div className="search-field">
                <Input
                  type="text"
                  className="form-control search"
                  name="searchField"
                  id="search"
                  placeholder="Search Here"
                />
                <i className="bi bi-search" />
              </div>
              <div>
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="bi bi-person-circle me-2" />
                  Account
                </button>
              </div>
              <div className="ms-3">
                <button className="btn btn-info btn-sm">
                  <i className="bi bi-cart me-2" />
                  Cart
                </button>
              </div>
              <div className="ms-3">
                <button
                  className="btn btn-success btn-sm light-dark-mode"
                  onClick={(e) => handleThemeChange(e)}
                >
                  <i className="bi bi-moon fs-18" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;