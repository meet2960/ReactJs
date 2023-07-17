import React from "react";
import Routing from "./Pages/Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles/app.scss";

const App = () => {
  return (
    <React.Fragment>
      <Routing />
    </React.Fragment>
  );
};

export default App;
