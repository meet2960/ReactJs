import React from "react";

const CommonHeading = ({ heading }) => {
  return (
    <React.Fragment>
      <div className="heading-title mb-3">
        <h3 className="mb-0">{heading}</h3>
      </div>
    </React.Fragment>
  );
};

export default CommonHeading;
