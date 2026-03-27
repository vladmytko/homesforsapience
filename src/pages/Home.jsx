import React from 'react'
import Header from '../components/ReusableComponents/Header'
import Navbar from '../components/ReusableComponents/Navbar'
import CompanyIntro from '../components/HomePageComponents/CompanyIntro'
import Services from '../components/HomePageComponents/HomePageServices/Services'
import { assets_manager } from '../assets/assets_manager'
import CaseStudies from '../components/HomePageComponents/HomePageCaseStudies/CaseStudies'
import ContactForm from '../components/ReusableComponents/ContactForm'
import TestimonialSection from '../components/HomePageComponents/HomeTestimonials/TestimonialSection'
import Footer from '../components/ReusableComponents/Footer'
import HomePageAbout from '../components/HomePageComponents/HomePageAbout'



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
      <HomePageAbout />
      <CaseStudies />
      <TestimonialSection />
      <ContactForm />
      <Footer />

    </>
  )
}

export default Home