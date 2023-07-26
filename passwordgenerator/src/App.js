import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/customCommon.scss";
import Game from "./components/Game";
import Home from "./pages/Home";
import "./assets/tictactoe.scss";
const App = () => {
  return (
    <React.Fragment>
      {/* <Home /> */}
      <Game />
    </React.Fragment>
  );
};

export default App;
