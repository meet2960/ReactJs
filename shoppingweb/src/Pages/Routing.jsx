import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Components/Header";
import Home from "./Home";

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className="main-content container-fluid">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Routing;