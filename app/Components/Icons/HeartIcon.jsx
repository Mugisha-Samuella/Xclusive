import React from 'react'
import { GoHeartFill } from "react-icons/go";

const HeartIcon = () => {
  return (
    <div className='relative flex flex-row'>
      <GoHeartFill style={{width:'25px', height:'25px'}} />
      <div className='absolute rounded-full bg-red-500 top-0 right-0 translate-x-1/4 justify-center h-4 w-4 inline-flex'>
           <h1 className='text-white text-xs font-semibold'>0</h1>
      </div>
    </div>
  )
}

export default HeartIcon
