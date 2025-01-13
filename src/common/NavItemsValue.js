import { FaBars } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";


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
    {
        listClass:"nav-item d-none d-sm-inline-block",
        anchorClass :"nav-link",
        name : "Dashboard",
        href : "/dashboard"
    },
   
   
   
]

export default NavItemsValue;