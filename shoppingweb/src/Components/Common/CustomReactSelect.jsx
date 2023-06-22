import React, { useState } from "react";
import Select from "react-select";

const CustomReactSelect = ({
  optionText,
  options,
  selectName,
  getSelectedValue,
}) => {
  const [selectedOption, setSelectedOption] = useState();
  const handleChange = (selectedOption, options) => {
    console.log("Inside react Select", selectedOption, options);
    setSelectedOption(selectedOption.value);
    getSelectedValue(selectedOption.value, options); // send value back to other component
    console.log("Selected Option Value", selectedOption.value);
    console.log("Selected Options Object", options);
  };
  return (
    <React.Fragment>
      <div className="custom-select-container fs-14">
        <Select
          className="react-select-container"
          classNamePrefix="custom-react-select"
          value={selectedOption?.value}
          options={options}
          onChange={handleChange}
          placeholder={optionText}
          name={selectName}
        />
      </div>
    </React.Fragment>
  );
};

export default CustomReactSelect;
