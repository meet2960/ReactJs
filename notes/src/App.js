import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/custom.css";
import Routing from "./Pages/Routing";

const App = () => {
  return (
    <div className="min-100vh d-flex flex-column">
      <Routing />
    </div>
  );
};

export default App;
