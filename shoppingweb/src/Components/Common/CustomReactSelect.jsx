import React from "react";
import Select from "react-select";

const CustomReactSelect = ({ options, getSelectedValue }) => {
  const handleChange = (selectedOption, options) => {
    console.log("ReactSelect", selectedOption.value);
    getSelectedValue(selectedOption.value, options);
  };
  return (
    <React.Fragment>
      <div className="custom-select-container fs-14">
        <Select
          options={options}
          className="react-select-container"
          classNamePrefix="custom-react-select"
          onChange={handleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default CustomReactSelect;
