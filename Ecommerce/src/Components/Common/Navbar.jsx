import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../../Redux/cartSlice";
import Swal from "sweetalert2";
const Navbar = () => {
  const productData = useContext(ProductContext);
  const dispatch = useDispatch();
  const allData = useSelector((state) => state);
  const cart = allData.cart;
  const login = allData.isLoggedIn;
  // * For Searching Products
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResult, setFilterResult] = useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length <= 2) {
      setFilterResult([]);
    } else {
      setFilterResult(
        productData.filter((item) => {
          let answer = item.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
          return answer;
        })
      );
    }
  };
  const userLogout = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Logged Out Successfully",
      timer: 1500,
      showConfirmButton: false,
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light w-100">
        <div className="container-fluid">
          <div>
            <NavLink className="navbar-brand me-0" to="/">
              <img
                src={logo}
                alt="logo"
                height={130}
                width={130}
                className="img-fluid"
              />
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
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/category">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/checkout">
                  Checkout
                </NavLink>
              </li>
            </ul>

            {!login ? null : (
              <>
                <div className="col-12 col-md-12 col-lg-5 d-flex justify-content-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                    name="searchTerm"
                    value={searchTerm}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <NavLink to="/login">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => {
                        // dispatch(loggedOut());
                        userLogout();
                      }}
                    >
                      Logout
                    </button>
                  </NavLink>
                  <NavLink to="/userprofile" className="text-decoration-none">
                    <button className="btn" type="button">
                      <i className="fa-solid fa-user"></i>
                    </button>
                  </NavLink>
                  <div className="position-relative">
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#cartOffCanvas"
                      aria-controls="offcanvasRight"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span className="cart-len">{cart.length}</span>
                    </button>
                  </div>
                </div>
              </>
            )}
            {login ? null : (
              <NavLink to="/login">
                <button type="login" className="btn btn-secondary btn-sm">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </nav>
      {/* // * Display Search Result  */}
      {filteredResult && searchTerm.length >= 3 ? (
        <div className="container-fluid">
          <div className="row p-4 align-items-stretch rounded-3 bs">
            {filteredResult.map((items, index) => {
              return (
                <div
                  class="col-12 col-md-4 col-lg-3 col-xl-3 text-center"
                  key={index}
                >
                  <div className="p-3 shadow rounded-3">
                    <div className="img-sm">
                      <NavLink
                        to={`/showproduct/${items.id}`}
                        className="text-decoration-none text-dark"
                        onClick={(e) => setSearchTerm("")}
                      >
                        <img
                          src={items.images[0]}
                          alt="search-img"
                          className="img-fluid"
                        />
                      </NavLink>
                    </div>
                    <div>
                      <p className="mb-0">{items.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
