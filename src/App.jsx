import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SideBar from "./pages/SideBar";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          
        </Route>
        <Route path="/side" element={<SideBar/>}/>
      </Routes>
    </div>
  );
};

export default App;
