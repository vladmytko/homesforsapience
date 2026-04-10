import React from 'react'
import Navbar from '../components/ReusableComponents/Navbar'
import TestimonialSection from '../components/HomePageComponents/HomeTestimonials/TestimonialSection'
import Footer from '../components/ReusableComponents/Footer'

const Testimonials = () => {
  return (
    <section>
        <Navbar />
        <TestimonialSection />
        <Footer />
    </section>
  )
}

export default Testimonials