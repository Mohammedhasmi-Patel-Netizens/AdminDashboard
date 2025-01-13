import { FaBars } from "react-icons/fa";

const NavItemsValue = [
    {
        listClass:"nav-item d-none d-sm-inline-block",
        anchorClass :"nav-link",
        icon : FaBars,
        href : "/",
        "data-widget" : "pushmenu"
    },
    {
        listClass:"nav-item d-none d-sm-inline-block",
        anchorClass :"nav-link",
        name : "Home",
        href : "/"
    },
    {
        listClass:"nav-item d-none d-sm-inline-block",
        anchorClass :"nav-link",
        name : "Contact",
        href : "/contact"
    },
    {
        listClass:"nav-item d-none d-sm-inline-block",
        anchorClass :"nav-link",
        name : "About Us",
        href : "/about"
    },
   
   
]

export default NavItemsValue;