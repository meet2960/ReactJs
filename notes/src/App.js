import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/custom.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./assets/styles/dark-layout.scss"
import Routing from "./Pages/Routing";

const App = () => {
  return (
    <div>
      <Routing />
    </div>
  );
};

export default App;