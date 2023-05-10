import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/app.scss";
import Routing from "./Pages/Routing";

const App = () => {
    return (
        <div className="layout-wrapper">
            <Routing/>
        </div>
    );
};

export default App;