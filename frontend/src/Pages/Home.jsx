import React from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import NewArrivals from '../Components/NewArrivals'
import Banners from '../Components/Banners'
import PopularProducts from '../Components/PopularProducts'

import Footer from '../Components/Footer'


const Home = () => {
  return (
    
    <>
    <Hero/>
    
    <Features/>
    <NewArrivals/>
    <Banners/>
    <PopularProducts/>
   
    <Footer/>
    </>
  )
}

export default Home