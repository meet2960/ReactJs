import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className={"loader-background"}>
      <div className={" position-absolute top-50 left-50"}>
        <Spinner />
      </div>
    </div>
  );
};

export default Loader;
