
import React from "react";
import HeartIcon from "../Icons/HeartIcon";
import Cart from "../Icons/Cart";
import Hamburger from "../Icons/Hamburger";
import Search from "../Icons/Search";
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between pt-8 p-6">
        <h1 className="font-Inter font-bold text-xl ">Xclusive</h1>
        <ul className="hidden md:flex gap-10 font-Inter">          
          <Link href="/" className="underline decoration-black decoration-4 underline-offset-[10px]">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">About</Link>
          <Link href="/contact">Login/SignUp</Link>
        </ul>
        <div className="flex flex-row gap-6">
          <HeartIcon />
          <Cart />
          <Hamburger />
        </div>
      </div>
      <hr />
      <div className="p-6 pt-8 rounded-lg">
        <Search/>
      </div>
    </>
  );
};

export default Navbar;
