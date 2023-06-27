import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/app.scss";
import { Outlet } from "react-router-dom";

const App = () => {
  return <Outlet />;
};

export default App;
