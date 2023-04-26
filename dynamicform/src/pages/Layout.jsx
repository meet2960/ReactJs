import React from "react";
import CreateForm from "./CreateForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratedForm from "./GeneratedForm";
const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateForm />} />
        <Route path="newform" element={<GeneratedForm />} />
      </Routes>
      {/* <CreateForm /> */}
    </BrowserRouter>
  );
};

export default Layout;
