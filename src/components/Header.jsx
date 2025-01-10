import React from "react";
import NavItem from "./NavItem";
import { FaBars, FaClock,  FaComment,  FaRegComments } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import MessageUserComponent from "../common/MessageUserComponent";
import commonHeaderValue from "../common/commonHeader";
const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* <!-- Left navbar links --> */}
      <ul className="navbar-nav">
        <NavItem
          listClass="nav-item"
          anchorClass="nav-link"
          icon={FaBars}
          dataWidget="pushmenu"
          href="/"
          role="button"
        />

        <NavItem
          listClass="nav-item d-none d-sm-inline-block"
          anchorClass="nav-link"
          name="Home"
          href="/"
        />

        <NavItem
          listClass="nav-item d-none d-sm-inline-block"
          anchorClass="nav-link"
          name="Contact"
          href="/contact"
        />

         {/* this is dynamic and wont work perfectly */}
        
        
         {/* {
           commonHeaderValue.map((item,index)=>(

            
            <NavItem
            key={index}
            listClass={item.listClass}
            anchorClass={item.anchorClass}
            href={item.href}
            role={item.role}
            name={item?.name}
            icon={item?.icon}
            />
          ))
        }  */}




      </ul>

     
    </nav>
  );
};

export default Header;
