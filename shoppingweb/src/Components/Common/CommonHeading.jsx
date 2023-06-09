import React from "react";

const CommonHeading = ({ heading }) => {
  return (
    <React.Fragment>
      <div className="heading">
        <div className="heading-title mb-3">
          <h3 className="mb-0">{heading}</h3>
        </div>
        <p className="text-center mb-4">
          Look at this amazing Currently Trending Products to Buy from with
          lowest Price Every...!!!
        </p>
      </div>
    </React.Fragment>
  );
};

export default CommonHeading;
