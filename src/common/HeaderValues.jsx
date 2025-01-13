import { FaBars } from "react-icons/fa";

  const commonHeaderValue = [
  {
    listClass: "nav-item",
    anchorClass: "nav-link",
    icon: { FaBars },
    href: "/",
    role: "button",
  },
  {
    listClass: "nav-item d-none d-sm-inline-block",
    anchorClass: "nav-link",
    name: "Home",
    href: "/home",
  },
  {
    listClass: "nav-item d-none d-sm-inline-block",
    anchorClass: "nav-link",
    name: "Contact",
    href: "/contact",
  },
  {
    listClass: "nav-item d-none d-sm-inline-block",
    anchorClass: "nav-link",
    name: "Hasmi",
    href: "/contact",
  },
];

export default commonHeaderValue;