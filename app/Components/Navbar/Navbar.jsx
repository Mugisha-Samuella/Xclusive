import React from "react";
import HeartIcon from "../Icons/HeartIcon";
import Cart from "../Icons/Cart";
import Hamburger from "../Icons/Hamburger";
import Search from "../Icons/Search";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between pt-8 p-6">
        <h1 className="font-Inter font-bold text-xl ">Xclusive</h1>
        <ul className="hidden md:flex gap-10 font-Inter">
          <li>
            <a href=""></a>Home
          </li>
          <li>
            <a href=""></a>Product
          </li>
          <li>
            <a href=""></a>Contact
          </li>
          <li>
            <a href=""></a>About
          </li>
          <li>
            <a href=""></a>Login/SignUp
          </li>
        </ul>
        <div className="flex flex-row gap-6">
          <HeartIcon />
          <Cart />
          <Hamburger />
        </div>
      </div>
      <hr />
      <div className="p-6 pt-8 ">
        <Search className="rounded-lg" />
      </div>
    </>
  );
};

export default Navbar;
