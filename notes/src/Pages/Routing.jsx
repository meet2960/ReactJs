import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EditNote from "./EditNote";
import AddNote from "./AddNote";
import AddNoteForm from "../Components/AddNoteForm";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<AddNoteForm />} />
          <Route path="/add/:id" element={<AddNote />} />
          <Route path="/edit/:id" element={<EditNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
