import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Hero from '../Components/Hero/Hero'
import TodaysSection from '../Components/TodaySection/TodaysSection'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <TodaysSection/>
    </div>
  )
}

export default Home
