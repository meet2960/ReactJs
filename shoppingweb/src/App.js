import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/app.scss";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Outlet />

    /*  <div className="layout-wrapper">
        <Routing />
      </div> */
  );
};

export default App;