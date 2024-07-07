import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/createBook";
import ShowBook from "./pages/showBook";
import EditBooks from "./pages/editBooks";
import DeleteBook from "./pages/deleteBook";
import Home from "./pages/Home";
import Spinner from "./Components/Spinner";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
