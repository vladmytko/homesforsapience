import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Button from "../components/ReusableComponents/Button";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection";
import Footer from "../components/ReusableComponents/Footer";
import ContactForm from "../components/ReusableComponents/ContactForm";
import ServiceCards from "../components/ReusableComponents/ServiceCards";
motion

const Consultancy = () => {
  const consultancyPoints = [
    "Reviewing your current financial position",
    "Identifying market opportunities",
    "Understanding mortgages and funding options",
    "Analysing potential deals",
    "Planning refurbishment and value-add strategies",
    "Optimising rental strategy and cash flow",
    "Scaling and structuring your property portfolio",
    "Avoiding common investment mistakes"
  ];

  const consultancyPointsTitle = [
    "Financial Review",
    "Opportunities",
    "Financing",
    "Analysis",
    "Refurbishment",
    "Optimisation",
    "Scaling & Structure",
    "Risk Avoidance"
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
    <section className="overflow-hidden">
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl mb-10">
            Property Investment Consultation
          </h2>
          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-100 lg:w-112.5 rounded">
                  <img
                    src={assets_manager.home_founder}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col text-xl">
                <div className="space-y-4 text-gray-700 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed">
                    If you are not yet ready for full coaching but want
                    professional direction, a one-hour consultation is the
                    perfect starting point.
                  </p>

                  <p className="leading-relaxed">
                    This focused session is designed to give you clarity,
                    practical advice and a clear action plan for your next steps
                    in property investment.
                  </p>

                  <p className="leading-relaxed">
                    There are no templates here. Every investor’s journey is
                    different. We will take time to understand your goals,
                    financial position, and risk tolerance in order to design a
                    strategy that truly fits your situation. The process is not
                    complicated, but it does require commitment and focus.
                  </p>

                  <p className="leading-relaxed">
                    There are no shortcuts or “magic solutions” — otherwise
                    everyone would already have them. What you will get instead
                    is a clear strategy and practical blueprint, and I am here
                    to guide you through it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--color-bg-warm)">
        <div className="lg:max-w-7xl mx-auto py-12 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-5">
            Consultation Focus
          </h2>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 ml-20 gap-x-10 gap-y-10 text-gray-800"
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
                  <span className="text-3xl text-gray-800">{consultancyPointsTitle[index]}</span>
                  <span className="transition-colors duration-300 group-hover:text-(--color-text-dark) text-xl text-gray-400">
                  {point}
                </span>
                </div>
                </div>
                
              </motion.li>
            ))}
          </motion.ul>

          
        </div>
      </div>

      <ServiceCards />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Consultancy;
