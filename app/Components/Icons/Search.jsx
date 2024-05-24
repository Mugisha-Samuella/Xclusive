import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='flex flex-row justify-center bg-gray-100 items-center '>
        <input 
              type="text"
              placeholder="What are you looking for? ..not yet active"
              className="md:p-3 bg-gray-100 text-[13px]  p-3 w-[20rem] focus:outline-none "
            />
        <button className='bg-gray-100 p-2  justify-center items-center'>
        <CiSearch className='font-bold' style={{width:'27px', height:'27px'}}/>
          </button>  
    </div>
  )
}

export default Search
