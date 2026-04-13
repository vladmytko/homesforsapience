import React, { useEffect } from 'react'
import Header from '../components/ReusableComponents/Header'
import Navbar from '../components/ReusableComponents/Navbar'
import CompanyIntro from '../components/HomePageComponents/CompanyIntro'
import Services from '../components/HomePageComponents/HomePageServices/Services'
import { assets_manager } from '../assets/assets_manager'
import ContactForm from '../components/ReusableComponents/ContactForm'
import TestimonialSection from '../components/HomePageComponents/HomeTestimonials/TestimonialSection'
import Footer from '../components/ReusableComponents/Footer'
import HomePageAbout from '../components/HomePageComponents/HomePageAbout'
import HomeCaseStudies from '../components/HomePageComponents/HomePageCaseStudies/HomeCaseStudies'
import { useLocation } from 'react-router-dom'



const Home = () => {

  // Navigation to Contact form in Home Page
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#Contact") {
      const el = document.getElementById("Contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth"})
      }
    }
  }, [location]);

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
      <HomePageAbout />
      <HomeCaseStudies />
      <Services />
      
      <TestimonialSection />
      <ContactForm />
      <Footer />

    </>
  )
}

export default Home