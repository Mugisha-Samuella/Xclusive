import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  return (
    <div  className='relative flex flex-row'>
      <FaCartShopping style={{width:'30px', height:'30px'}}/>
      <div className='absolute rounded-full bg-red-500 top-0 right-0 translate-x-1/4 justify-center h-5 w-5 inline-flex'>
           <h1 className='text-white text-sm font-semibold justify-center items-center'>0</h1>
      </div>
    </div>
  )
}

export default Cart
