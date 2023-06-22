import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLayoutMode } from "../../Redux/layouts/layout";
import { NavLink } from "react-router-dom";
import { Col, Container, Input } from "reactstrap";
import Logo from "../../assets/images/NewLogo.png";
import DarkLogo from "../../assets/images/NewDarkLogo.png";
import CustomReactSelect from "../Common/CustomReactSelect";
import { CurrenctContext } from "../../Context/CurrencyContext";
import Select from "react-select";
const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems); // to get cart total item count
  // * For Currency Change
  const { currency, handleCurrencyFormatChange } = useContext(CurrenctContext);
  // * To get currenct layout theme of Page
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
  const currencyOptions = [
    { value: "INR", label: "INR" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];
  const handleSelectedValue = (selectedValue) => {
    // console.log("Selected Currency", selectedValue);
    handleCurrencyFormatChange(selectedValue.value);
  };
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
                    <NavLink className="nav-link" to={"/"} aria-current="page">
                      Blogs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <div className="custom-select-container fs-14">
                      <Select
                        className="react-select-container"
                        classNamePrefix="custom-react-select"
                        placeholder={"Currency"}
                        name={"currency"}
                        options={currencyOptions}
                        onChange={handleSelectedValue}
                        // value={selectedValue ? currencyOptions[0] : null}
                      />
                    </div>
                    {/*    <CustomReactSelect
                      optionText={"Currency"}
                      options={currencyOptions}
                      getSelectedValue={handleSelectedValue}
                    /> */}
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
                  <ul className="navbar-nav align-items-center nav-icons">
                    <li className="nav-item">
                      <button type="button" className="btn btn-primary btn-sm">
                        Logout
                      </button>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to=""
                        className="light-dark-mode nav-link"
                        onClick={(e) => handleThemeChange(e)}
                      >
                        <i className="bi bi-moon" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/wishlist" className="nav-link">
                        <i className="fa-regular fa-heart fs-22"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/profile" className="nav-link">
                        <i className="fa-regular fa-user fs-22"></i>
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
                          <span className="badge text-dark">
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
