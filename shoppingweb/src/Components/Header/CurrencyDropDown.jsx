import React, { useContext } from "react";
import Select from "react-select";
import { CurrenctContext } from "../../context/CurrencyContext";

const CurrencyDropDown = () => {
  // * For Currency Change
  const { currency, handleCurrencyFormatChange } = useContext(CurrenctContext);
  // ? To Create currency Options
  const currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "INR", label: "INR" },
    { value: "EUR", label: "EUR" },
  ];
  // ? Change Currency Based on DropDown Selected Value
  const handleSelectedValue = (selectedValue) => {
    console.log("Selected Currency", selectedValue.value);
    handleCurrencyFormatChange(selectedValue);
  };
  return (
    <React.Fragment>
      <div className="custom-select-container fs-14">
        <Select
          className="react-select-container"
          classNamePrefix="custom-react-select"
          placeholder={"Currency"}
          name={"currency"}
          options={currencyOptions}
          onChange={handleSelectedValue}
          value={currency}
        />
      </div>
    </React.Fragment>
  );
};

export default CurrencyDropDown;