import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeLayoutMode} from "../Redux/layouts/layout";

const Header = () => {
  const dispatch = useDispatch();
  const {layoutType} = useSelector((state) => ({
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
            <a className="navbar-brand" href="#">
              ECart
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Category
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
              <div className="d-flex align-items-center">
                <div>
                  <button className="btn btn-primary">
                    <i className="bi bi-cart fs-18"/>
                  </button>
                </div>
                <div className="ms-3">
                  <button
                      className="btn btn-primary light-dark-mode"
                      onClick={(e) => handleThemeChange(e)}
                  >
                    <i className="bi bi-moon fs-18"/>
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