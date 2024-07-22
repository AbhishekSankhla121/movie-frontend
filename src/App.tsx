import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./component/Header";
import CreateMovies from "./component/Create";
import Update from "./component/Update";
import Homeee from "./component/Home";
import DefaultPageUser from "./component/Defa";
function App() {
  return (
    <Router>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homeee />} />
        <Route path="/create" element={<CreateMovies />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/default" element={<DefaultPageUser />} />
      </Routes>
    </Router>
  );
}

export default App;
