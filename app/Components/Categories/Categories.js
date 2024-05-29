import React from 'react'
import { FiHeadphones } from "react-icons/fi";
import { TbCamera } from "react-icons/tb";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiDesktop } from "react-icons/ci";
import { LuSmartphone } from "react-icons/lu";
const Categories = () => {
  return (
    <div  className='p-6 pt-[8rem]'>
      <div className=' items-center  flex flex-row gap-4'>
      <div className='h-10 w-5 bg-red-500  rounded-[3px]'></div>
      <p className='text-red-500 text-[1.10rem]'>Categories</p>
    </div>
    <div className='pt-4 text-left'>
        <h3 className='font-semibold text-[1.87rem]'>Browse By Category</h3>
    </div>
    <div className=' flex flex-row overflow-x-scroll gap-2  pt-0'>
      <button className='border-gray-300 rounded-md border-[0.5px] flex flex-col p-10 justify-center items-center'>
      <LuSmartphone style={{width: '54px', height:'54px'}} />
      <h3>Phones</h3>
    </button>
      <button className='border-gray-300 rounded-md border-[0.5px] flex flex-col p-10 justify-center items-center'>
      <CiDesktop style={{width: '54px', height:'54px'}} />
      <h3>Laptops</h3></button>
      <button className='border-gray-300 rounded-md border-[0.5px] flex flex-col p-10 justify-center items-center'>
      <TbDeviceWatchStats  style={{width: '54px', height:'54px'}}/>
      <h3>Watches</h3></button>
      <button className='border-gray-300 rounded-md border-[0.5px] flex flex-col p-10 justify-center items-center'>
      <TbCamera style={{width: '54px', height:'54px'}} />
      <h3>Camera</h3></button>
      <button className='border-gray-300 rounded-md border-[0.5px] flex flex-col p-10 justify-center items-center'>
      <FiHeadphones style={{width: '54px', height:'54px'}} />
      <h3>Headphones</h3></button>
    </div>
    </div>
  )
}

export default Categories
