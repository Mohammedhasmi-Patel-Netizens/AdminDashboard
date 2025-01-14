import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import SideBar from "./pages/SideBar";
import About from "./components/About";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/Profile";
import UserProfile from "./components/UserProfile";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view/:id" element={<UserProfile />} />
          <Route path="/post/:id" element={<PostDetails />} />

        </Route>
        <Route path="/side" element={<SideBar/>}/>
      </Routes>
    </div>
  );
};

export default App;
