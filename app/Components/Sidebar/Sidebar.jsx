import React from 'react'

const Sidebar = () => {
  return (
    <div className=' flex flex-row overflow-x-scroll gap-2 p-6 pt-0'>
      <button className='border-gray-300 rounded-md border-[0.5px] p-3 '>All</button>
      <button className='border-gray-300 rounded-md border-[0.5px] p-2 min-w-[10rem]'>Women Fashion</button>
      <button className='border-gray-300 rounded-md border-[0.5px] p-2 min-w-[10rem]'>Men Fashion</button>
      <button className='border-gray-300 rounded-md border-[0.5px] p-3 '>Electronics</button>
      <button className='border-gray-300 rounded-md border-[0.5px] p-3 '>Shoes</button>
    </div>
  )
}

export default Sidebar
