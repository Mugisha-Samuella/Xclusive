import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Hero from '../Components/Hero/Hero'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
    </div>
  )
}

export default Home
