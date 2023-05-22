import React, { useContext, useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { CurrenctContext } from "../../Context/CurrencyContext";

const CurrencyDropDown = () => {
  const [isCurrencyDropDown, setIsCurrencyDropDown] = useState(false);
  const toggleCurrencyDropDown = () => {
    setIsCurrencyDropDown(!isCurrencyDropDown);
  };
  const { currency, handleCurrencyFormatChange } = useContext(CurrenctContext);
  return (
    <div className="currency-dropdown">
      <Dropdown
        isOpen={isCurrencyDropDown}
        toggle={toggleCurrencyDropDown}
        className="topbar-head-dropdown ms-1 header-item"
      >
        <DropdownToggle
          type="button"
          tag="button"
          className="btn btn-sm btn-primary"
        >
          <i className="bi bi-currency-exchange"></i>
          Change
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
          <div>
            <div>
              <button
                type="butotn"
                className="btn btn-link btn-sm"
                onClick={() => handleCurrencyFormatChange("INR")}
              >
                INR
              </button>
            </div>
            <div>
              <button
                type="butotn"
                className="btn btn-link btn-sm"
                onClick={() => handleCurrencyFormatChange("USD")}
              >
                USD
              </button>
            </div>
            <div>
              <button
                type="butotn"
                className="btn btn-link btn-sm"
                onClick={() => handleCurrencyFormatChange("EUR")}
              >
                EUR
              </button>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default CurrencyDropDown;