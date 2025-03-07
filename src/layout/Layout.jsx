import React from "react";
import Footer from "../pages/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div style={{marginLeft:"300px",marginTop:"75px"}}>
        <Outlet />
      </div>
      <Footer style={{marginTop : "100px"}} />
    </>
  );
};

export default Layout;
