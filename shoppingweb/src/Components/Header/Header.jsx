import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLayoutMode } from "../../Redux/layouts/layout";
import { NavLink } from "react-router-dom";
import { Col, Container, Input, Row } from "reactstrap";
import Logo from "../../assets/images/NewLogo.png";
import DarkLogo from "../../assets/images/NewDarkLogo.png";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const { layoutType } = useSelector((state) => ({
    layoutType: state.layout.layoutModeType,
  }));
  useEffect(() => {
    if (layoutType) {
      // ? Get the current layout mode, then set it
      document.body.setAttribute("data-layout-mode", layoutType);
    }
    // console.log("Inside Header Component", layoutType);
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
      <header className="nav-bg">
        <Container>
          <nav className="navbar navbar-expand-lg py-2">
            <Container fluid className="px-0">
              <Col xs={3} lg={2} xl={1}>
                <div className="logo">
                  <NavLink to="/" href="#">
                    {layoutType === "light" ? (
                      <img src={Logo} alt="main-logo" className="img-fluid" />
                    ) : (
                      <img
                        src={DarkLogo}
                        alt="main-logo"
                        className="img-fluid"
                      />
                    )}
                  </NavLink>
                </div>
              </Col>

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
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarTogglerDemo02"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      to={"/category"}
                      className="nav-link"
                      aria-current="page"
                    >
                      Category
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/header"}
                      aria-current="page"
                    >
                      Deals
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <div className="search-field">
                    <Input
                      type="text"
                      className="form-control form-control-sm search"
                      name="searchField"
                      id="search"
                      placeholder="Search Here"
                    />
                    <i className="bi bi-search" />
                  </div>
                </div>
                <div className="mt-3 mt-lg-0">
                  <Row className="align-items-center justify-content-evenly">
                    <Col xs={"auto"}>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          <i className="bi bi-suit-heart"></i>
                        </button>
                      </div>
                    </Col>
                    <Col xs={"auto"}>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          <i className="bi bi-person-circle" />
                        </button>
                      </div>
                    </Col>
                    <Col xs={"auto"}>
                      <button
                        className="btn btn-dark btn-sm"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartOffCanvas"
                        aria-controls="offcanvasRight"
                      >
                        <i className="bi bi-cart" />
                        <span className="ms-2 badge">
                          {cart && cart.length}
                        </span>
                      </button>
                    </Col>
                    <Col xs={"auto"}>
                      <button
                        className="btn btn-success btn-sm light-dark-mode"
                        onClick={(e) => handleThemeChange(e)}
                      >
                        <i className="bi bi-moon" />
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Container>
          </nav>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;