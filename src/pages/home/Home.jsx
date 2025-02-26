import React from 'react'
import Banner from '../../components/banner'
import Categories from '../../components/Categories'
import HeroSection from '../../components/HeroSection'
import TrendingProducts from '../../components/TrendingProducts'
import PromoBanner from '../../components/PromoBanner'
import DealsSection from '../../components/Deals'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <Banner/>
      <Categories/>
      <HeroSection/>
      <TrendingProducts/>
      <DealsSection/>
      <PromoBanner/>
      <Footer/>
    </>
  )
}

export default Home
