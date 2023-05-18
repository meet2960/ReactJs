import React, { useState } from "react";

const CurrencyChange = () => {
  const [isCurrencyDropDown, setIsCurrencyDropDown] = useState(false);
  const toggleNotificationDropdown = () => {
    setIsCurrencyDropDown(!isCurrencyDropDown);
  };

  return (
    <div className="currency-dropdown">
      <ul className="list-unstyled d-flex">
        <li>
          <button type="button" className="btn btn-dark">
            INR
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-dark">
            USD
          </button>
        </li>
        <li>
          <button type="button" className="btn btn-dark">
            EURO
          </button>
        </li>
      </ul>
      {/*   <Dropdown
        isOpen={isCurrencyDropDown}
        toggle={toggleNotificationDropdown}
        className="topbar-head-dropdown ms-1 header-item"
      >
        <DropdownToggle
          type="button"
          tag="button"
          className="btn btn-link btn-topbar btn-ghost-light rounded-circle"
        >
          <i className="bi bi-currency-exchange"></i>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
          <div className="dropdown-head bg-light bg-pattern rounded-top">
            <div className="p-3">
              
            </div>
          </div>
        </DropdownMenu>
      </Dropdown> */}
    </div>
  );
};

export default CurrencyChange;