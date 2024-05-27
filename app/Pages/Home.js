import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Hero from '../Components/Hero/Hero'
import TodaysSection from '../Components/TodaySection/TodaysSection'
import Categories from '../Components/Categories/Categories'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <TodaysSection/>
      <Categories/>
    </div>
  )
}

export default Home
