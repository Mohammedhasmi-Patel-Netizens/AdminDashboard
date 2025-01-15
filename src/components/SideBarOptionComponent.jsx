import React from "react";
import useToggle from "../hook/useToggle";
import { Link } from "react-router-dom";

const SideBarOptionComponent = ({isActive,navIconClass,optionValue,firstSubMenu,secondSubMenu}) => {
  const [isSidebarOpen, toggleSidebar] = useToggle();

  return (
    <li className={`${isSidebarOpen?"nav-item menu-is-opening menu-open":"nav-item"}`}>
      <Link to="/" className={`nav-link ${isActive ? "active":""}`}>
        <i className={`${navIconClass}`}></i>
        <p onClick={toggleSidebar}>
          {optionValue}
          <i className="right fas fa-angle-left"></i>
        </p>
        <ul
          className={`nav nav-treeview d-${isSidebarOpen ? "block" : "none"}`}
        >
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>{firstSubMenu}</p>
            </a>
            <a href="#" className="nav-link">
              <i className="far fa-circle nav-icon"></i>
              <p>{secondSubMenu}</p>
            </a>
          </li>
        </ul>
      </Link>
    </li>
  );
};

export default SideBarOptionComponent;
