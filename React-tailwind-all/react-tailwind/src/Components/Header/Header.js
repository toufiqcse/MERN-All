import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link
        className="text-xl p-4 font-[Poppins]  shadow hover:text-indigo-800"
        to="/home"
      >
        {" "}
        Home
      </Link>
      <Link
        className="text-xl p-4 font-[Poppins]  shadow hover:text-indigo-800"
        to="/about"
      >
        {" "}
        About
      </Link>
      <Link
        className="text-xl p-4 font-[Poppins]  shadow hover:text-indigo-800"
        to="/products"
      >
        Products
      </Link>
      <Link
        className="text-xl p-4 font-[Poppins]  shadow hover:text-indigo-800"
        to="/users"
      >
        User
      </Link>
    </div>
  );
};

export default Header;
