import React from "react";
import NavItem from "./NavItem";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <NavItem
          listClass="nav-item"
          icon={FaBars}
          anchorClass="nav-link"
          href="/"
        />
        <NavItem
          listClass="nav-item"
          anchorClass="nav-link"
          name="Home"
          href="/"
        />
        <NavItem
          listClass="nav-item"
          anchorClass="nav-link"
          name="Contact"
          href="contact"
        />
      </ul>

     
    </nav>
  );
};

export default Header;
