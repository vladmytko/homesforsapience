import React from 'react'
import Header from '../components/ReusableComponents/Header'
import Navbar from '../components/ReusableComponents/Navbar'
import CompanyIntro from '../components/HomePageComponents/CompanyIntro'
import Services from '../components/HomePageComponents/HomePageServices/Services'
import { assets_manager } from '../assets/assets_manager'
import About from '../components/HomePageComponents/About'

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
      <CompanyIntro />
      <Services />
      <About />
    </>
  )
}

export default Home