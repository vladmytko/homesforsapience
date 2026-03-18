import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HomeCompanyIntro from '../components/HomeCompanyIntro'
import { assets_manager } from '../assets/assets_manager'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header
        title="Property Investment and Consultancy"
        backgroundImage={assets_manager.home_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <HomeCompanyIntro />
    </>
  )
}

export default Home