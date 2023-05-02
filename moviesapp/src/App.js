import React from "react";
import "./assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div className="primary-bg min-vh-100 d-flex flex-column">
      <Layout />
    </div>
  );
};

export default App;
