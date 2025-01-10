import React from "react";
import Footer from "../pages/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
