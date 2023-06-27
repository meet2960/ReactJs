import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { logout } from "../../Redux/auth/authSlice";
import CurrencyDropDown from "./CurrencyDropDown";

const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const toggleProfileDrowDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };
  return (
    <div className="currency-dropdown">
      <Dropdown
        isOpen={isDropDownOpen}
        toggle={toggleProfileDrowDown}
        className="topbar-head-dropdown ms-1 header-item"
      >
        <DropdownToggle type="button" tag="button" className="btn btn-link">
          <i className="fa-regular fa-user fs-22"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
          <div>
            <ul className="list-group fs-18555">
              <li className="list-group-item">
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
              <li className="list-group-item">
                <NavLink to="/home" className="nav-link">
                  Orders
                </NavLink>
              </li>
              <li className="list-group-item">
                <CurrencyDropDown />
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={(e) => dispatch(logout())}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileDropDown;
