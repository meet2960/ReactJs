import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/customCommon.scss";
import PasswordGenerator from "./Components/PasswordGenerator";
const App = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-center flex-column min-vh-100">
        <h1 className="text-center mb-3">Password Generator in React</h1>
        <PasswordGenerator />
      </div>
    </div>
  );
};

export default App;
