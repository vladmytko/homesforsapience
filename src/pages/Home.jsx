import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import HomeCompanyIntro from '../components/HomePageComponents/HomeCompanyIntro'
import HomePageServices from '../components/HomePageComponents/HomePageServices/HomePageServices'
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
      <HomePageServices />
    </>
  )
}

export default Home