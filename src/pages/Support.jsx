import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection";
import Footer from "../components/ReusableComponents/Footer";
import ContactForm from "../components/ReusableComponents/ContactForm";
import ServiceCards from "../components/ReusableComponents/ServiceCards";
import SupportServiceCards from "../components/ReusableComponents/SupportServiceCards";
motion

const Support = () => {

    const consultancyPoints = [
    "We clearly define what you're looking for — whether it’s for living or investment, including budget, location, and key criteria.",
    "I handle sourcing properties, contacting agents, and arranging up to 20 viewings.",
    "We spend one full day visiting properties together. During this day, I’ll show you: what to look for, how to assess condition and potential and how to evaluate true market value.",
    "After this, you continue viewings independently, equipped with the right knowledge and approach.",
    "Once you choose a property: I handle negotiations with the agent, help structure your offer, connect you with trusted brokers and solicitors if needed",
  ];

  const consultancyPointsTitle = [
    "Strategy & Criteria Definition",
    "Viewings Organisation",
    "Guided Viewing Day",
    "Independent Viewings",
    "Negotiation & Deal Support",
  ];

  const listContainerVariables = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };



  return (
    <section>
        <Navbar />

        <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl sm:mb-10">
            Property Buying Support 
          </h2>
          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto md:w-160 rounded mt-7 lg:mt-0">
                  <img
                    src={assets_manager.support_image}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col text-xl">
                <div className="space-y-4 text-base sm:text-xl text-gray-900 flex flex-col flex-1 gap-4 mt-10">
                  <p className="leading-relaxed">
                    Guide through the full buying journey — from defining your criteria to negotiating with agents. 

                  </p>

                  <p className="leading-relaxed">
                    Spend full day viewings together, learning how to assess deals and make confident decisions.
                  </p>

                  <p className="leading-relaxed">
                    Once a property is chosen, I support negotiations and connect you with trusted brokers and solicitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--color-bg-warm)">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-5">
            What's included
          </h2>

          <motion.ul
            className="grid grid-cols-1 gap-y-2 text-gray-800"
            variants={listContainerVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {consultancyPoints.map((point, index) => (
              <motion.li
                key={point}
                variants={listItemVariants}
                className="group flex items-start rounded-xl p-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/60 hover:shadow-md"
              >
                <div className="flex gap-2">
                  <img
                  src={assets_manager.tick}
                  alt="tick"
                  className="w-10 h-10 shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6"
                />
                <div className="flex flex-col">
                  <span className="text-xl sm:text-3xl text-gray-800">{consultancyPointsTitle[index]}</span>
                  <span className="transition-colors duration-300 group-hover:text-(--color-text-dark) text-base sm:text-xl text-gray-500">
                  {point}
                </span>
                </div>
                </div>
                
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <SupportServiceCards />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </section>
  )
}

export default Support