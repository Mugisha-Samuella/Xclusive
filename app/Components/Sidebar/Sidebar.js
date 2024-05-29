import React from 'react'

const Sidebar = () => {
  return (
    <div className='px-6 pt-0 flex md:border-r-2'>
    <div className=' flex flex-row md:overflow-clip overflow-x-scroll md:flex-col gap-2 pt-0'>
      <button className='border-gray-300 rounded-md  md:text-left border-[0.5px] md:border-0 p-3 '>All</button>
      <button className='border-gray-300 rounded-md md:text-left border-[0.5px] md:border-0  p-2 min-w-[10rem]'>Women Fashion</button>
      <button className='border-gray-300 rounded-md md:text-left border-[0.5px] md:border-0  p-2 min-w-[10rem]'>Men Fashion</button>
      <button className='border-gray-300 rounded-md md:text-left border-[0.5px] md:border-0  p-3 '>Electronics</button>
      <button className='border-gray-300 rounded-md md:text-left border-[0.5px] md:border-0  p-3 '>Shoes</button>
    </div>
    </div>
  )
}

export default Sidebar
