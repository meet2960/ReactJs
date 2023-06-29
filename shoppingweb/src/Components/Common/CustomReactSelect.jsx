import React, { useState } from "react";
import Select from "react-select";

const CustomReactSelect = ({
  optionText,
  options,
  selectName,
  getSelectedValue,
  key,
}) => {
  const [selectedOption, setSelectedOption] = useState();
  const handleChange = (selectedOption, options) => {
    console.log("Inside react Select Component", selectedOption);
    setSelectedOption(selectedOption.value);
    // getSelectedValue(selectedOption.value, options); // send value back to parent component
    console.log("Selected Option Value", selectedOption.value);
    console.log("Selected Options Object", options);
  };
  return (
    <React.Fragment>
      <div className="custom-select-container fs-14">
        <Select
          placeholder={optionText}
          className="react-select-container"
          classNamePrefix="custom-react-select"
          options={options}
          name={selectName}
          value={selectedOption?.value}
          onChange={handleChange} // gives Selected Value by itself
        />
      </div>
    </React.Fragment>
  );
};

export default CustomReactSelect;
