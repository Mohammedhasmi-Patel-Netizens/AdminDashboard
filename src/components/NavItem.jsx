import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ listClass, anchorClass, name, href, icon: Icon, role , dataWidget}) => {
  return (
    <>
      <li className={`${listClass}`} role={`${role ? role : ""}`}>
        <Link
          to={`${href}`}
          className={`${anchorClass}`}
          data-widget = {dataWidget ? dataWidget:null}
          role="button"
        >
          {name ? `${name}` : <Icon />}
        </Link>
      </li>
    </>
  );
};

export default NavItem;
