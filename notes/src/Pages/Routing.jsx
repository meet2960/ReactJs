import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import EditNote from "./EditNote";
import AddNote from "./AddNote";
import ViewSingleNote from "./ViewSingleNote";
import SearchNote from "./SearchNote";
import TodoPage from "./TodoPage";
import Layout from "../Pages/Layout";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchNote />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="add" element={<AddNote />} />
          <Route path="edit/:id" element={<EditNote />} />
          <Route path="note/:id" element={<ViewSingleNote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
