import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Hero from '../Components/Hero/Hero'
import TodaysSection from '../Components/TodaySection/TodaysSection'
import Categories from '../Components/Categories/Categories'
import Footer from '../Components/footer/page'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='flex flex-col md:flex-row'>
      <Sidebar/>
      <Hero/>
      </div>
      <TodaysSection/>
      <Categories/>
      <Footer/>
    </div>
  )
}

export default Home
