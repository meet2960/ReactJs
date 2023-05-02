import React from "react";
import "./assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Routing from "./pages/Routing";

const App = () => {
  return (
    <div className="primary-bg min-vh-100 d-flex flex-column">
      <Routing />
    </div>
  );
};

export default App;
