import React from "react";
import "./assets/styles/main.scss";
// import "./assets/styles/customCommon.scss";
import "./index.css";
import AppRoutes from "./routing/AppRoutes";
const App = () => {
  return (
    <React.Fragment>
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
