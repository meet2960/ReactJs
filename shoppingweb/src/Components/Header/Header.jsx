import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Col, Container, Input } from "reactstrap";
import Logo from "../../assets/images/NewLogo.png";
import DarkLogo from "../../assets/images/NewDarkLogo.png";

import ProfileDropDown from "../Common/ProfileDropDown";
import ThemeChange from "../Common/ThemeChange";
const Header = () => {
  const cart = useSelector((state) => state.cart.cartItems); // to get cart total item count
  // * To get currenct layout theme of Page for logo change
  const { layoutType } = useSelector((state) => ({
    layoutType: state.layout.layoutModeType,
  }));

  return (
    <React.Fragment>
      <header className="nav-bg">
        <Container>
          <nav className="navbar navbar-expand-lg">
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
                      to={"/cart"}
                      aria-current="page"
                    >
                      Cart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to={"/orders"}
                      aria-current="page"
                    >
                      Orders
                    </NavLink>
                  </li>
                </ul>
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
                <div className="mt-3 mt-lg-0">
                  <ul className="navbar-nav align-items-center nav-icons flex-row justify-content-center">
                    <li className="nav-item">
                      <ProfileDropDown />
                    </li>
                    <li className="nav-item">
                      <ThemeChange />
                    </li>
                    <li className="nav-item">
                      <NavLink to="/wishlist" className="nav-link">
                        <i className="fa-regular fa-heart fs-22"></i>
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        to=""
                        className="nav-link"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartOffCanvas"
                        aria-controls="offcanvasRight"
                      >
                        <div className="position-relative">
                          <i className="fa-solid fa-cart-shopping fs-22"></i>
                          <span className="badge text-muted">
                            {cart && cart.length}
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
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
