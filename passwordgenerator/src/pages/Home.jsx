import React from "react";
import PasswordGenerator from "../components/PasswordGenerator";

const Home = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-flex justify-content-center align-center flex-column min-vh-100">
          <h1 className="text-center mb-3">Password Generator in React</h1>
          <PasswordGenerator />
          {/* <Game /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
