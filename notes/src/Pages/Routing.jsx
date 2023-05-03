import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EditNote from "./EditNote";
import AddNote from "./AddNote";
import ViewSingleNote from "./ViewSingleNote";
import AllNotes from "./AllNotes";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<AllNotes />} />
          <Route path="/add" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
          <Route path="/note/:id" element={<ViewSingleNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
