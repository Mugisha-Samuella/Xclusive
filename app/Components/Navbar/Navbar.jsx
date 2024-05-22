import React from 'react'
import HeartIcon from '../Icons/HeartIcon'
import Cart from '../Icons/Cart'
import Hamburger from '../Icons/Hamburger'


const Navbar = () => {
  return (
    <>
    <div className='flex flex-row justify-between pt-8 p-5'>
      <h1 className='font-Inter font-bold text-xl '>Xclusive</h1>
      <ul className='md:flex gap-10 font-Inter'>
        <li><a href=""></a>Home</li>
        <li><a href=""></a>Product</li>
        <li><a href=""></a>Contact</li>
        <li><a href=""></a>About</li>
        <li><a href=""></a>Login/SignUp</li>
      </ul>
      <div className='flex flex-row gap-4'>
        <HeartIcon/>
        <Cart/>
        <Hamburger/>
      </div>
    </div>
    <hr />
    </>
  )
}

export default Navbar
