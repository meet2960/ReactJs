import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import ProfileDropDown from "./ProfileDropDown";
import ThemeChange from "./ThemeChange";

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
              <div>
                <NavLink to="/">
                  <h1 className="d-inline-block mb-0 logo-text d-block d-lg-none">
                    EBUY
                  </h1>
                </NavLink>
              </div>
              {/* <Col xs={3} lg={2} xl={1}>
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
              </Col> */}
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
                <div className="order-1 order-lg-2 d-none d-lg-block">
                  <NavLink to={"/"}>
                    <h1 className="d-d-inline-block mb-0 logo-text">EBUY</h1>
                  </NavLink>
                </div>
                <ul className="navbar-nav mb-2 mb-lg-0 order-3 order-lg-1">
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
                      to={"/allproducts"}
                      className="nav-link"
                      aria-current="page"
                    >
                      Products
                    </NavLink>
                  </li>
                </ul>
                {/*   <Col lg={4} className="text-center">
                  <h1 className="d-d-inline-block mb-0 logo-text">EBUY</h1>

                  <SearchField />
                </Col> */}
                <div className="mt-3 mt-lg-0 order-1 order-lg-3">
                  <ul className="navbar-nav align-items-center nav-icons flex-row justify-content-center">
                    <li className="nav-item">
                      <ProfileDropDown />
                    </li>
                    <li className="nav-item">
                      <ThemeChange />
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