import React from "react";
import Select from "react-select";

const CustomReactSelect = ({ label, options }) => {
  return (
    <React.Fragment>
      <div className="custom-select-container">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <Select
          options={options}
          className="react-select-container"
          classNamePrefix="custom-react-select"
        />
      </div>
    </React.Fragment>
  );
};

export default CustomReactSelect;