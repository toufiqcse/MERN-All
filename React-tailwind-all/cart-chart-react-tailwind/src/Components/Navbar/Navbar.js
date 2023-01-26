import React, { useState } from "react";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const NavRoutes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Product", path: "/product" },
    { id: 3, name: "Order", path: "/order" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Contact US", path: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="header shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between  bg-gray-200 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 hover:text-indigo-800 none">
          logo
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="h-6 w-6 md:hidden text-3xl absolute right-8 top-6 cursor-pointe"
        >
          {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  bg-gray-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 transition-all duration-500 ease-in ${
            open ? "top-16" : "top-[-259px]"
          }`}
        >
          {NavRoutes.map((nav) => (
            <Navlink key={nav.id} nav={nav}></Navlink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
