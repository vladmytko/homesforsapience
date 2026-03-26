import React from 'react'
import Header from '../components/ReusableComponents/Header'
import Navbar from '../components/ReusableComponents/Navbar'
import CompanyIntro from '../components/HomePageComponents/CompanyIntro'
import Services from '../components/HomePageComponents/HomePageServices/Services'
import { assets_manager } from '../assets/assets_manager'
import About from '../components/HomePageComponents/About'
import CaseStudies from '../components/HomePageComponents/HomePageCaseStudies/CaseStudies'
import ContactForm from '../components/ReusableComponents/ContactForm'
import TestimonialSection from '../components/HomePageComponents/HomeTestimonials/TestimonialSection'
import Footer from '../components/ReusableComponents/Footer'



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
      <CaseStudies />
      <TestimonialSection />
      <ContactForm />
      <Footer />

    </>
  )
}

export default Home