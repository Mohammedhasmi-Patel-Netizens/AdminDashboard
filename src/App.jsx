import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
