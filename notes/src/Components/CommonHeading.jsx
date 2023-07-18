import React from "react";

const CommonHeading = ({ title }) => {
  return (
    <React.Fragment>
      <div className="heading mb-4">
        <h2 className="mb-0">{title}</h2>
      </div>
    </React.Fragment>
  );
};

export default CommonHeading;
