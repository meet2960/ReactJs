import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { logout } from "../../Redux/auth/authSlice";
import CurrencyDropDown from "./CurrencyDropDown";
import { CustomToast } from "../../utils/customToast";

const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const toggleProfileDrowDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };
  const logoutUser = (e) => {
    e.preventDefault();
    dispatch(logout());
    CustomToast({ title: "Logged out Successfully", icon: "success" });
  };
  return (
    <Dropdown
      isOpen={isDropDownOpen}
      toggle={toggleProfileDrowDown}
      className="topbar-head-dropdown header-item profile-dropdown"
    >
      <DropdownToggle type="button" tag="button" className="nav-link">
        <i className="fa-regular fa-user fs-22"></i>
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
        <div>
          <ul className="list-group fs-16 text-center">
            <li className="list-group-item">
              <NavLink to="/profile" className="nav-link">
                My Profile
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/cart" className="nav-link">
                My Cart
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/orders" className="nav-link">
                My Orders
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="/wishlist" className="nav-link">
                My Wishlist
              </NavLink>
            </li>
            <li className="list-group-item">
              <span className="fs-14 text-primary">Change Currency</span>
              <CurrencyDropDown />
            </li>
            <li className="list-group-item">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={(e) => logoutUser(e)}
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropDown;
