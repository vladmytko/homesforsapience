import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Button from "../components/ReusableComponents/Button";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection";
import Footer from "../components/ReusableComponents/Footer";
import ContactForm from "../components/ReusableComponents/ContactForm";
import ServiceCards from "../components/ReusableComponents/ServiceCards";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
motion

const Consultancy = () => {
  const { language, t } = useLanguage();
  const content = t.consultationPage;

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

  // Navigation to free call from the footer
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#free-call') {
      const el = document.getElementById("free-call");
      if(el) {
        el.scrollIntoView({ behavior: "smooth"})
      }
    }
  }, [location])

  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-10">
            {content.title}
          </h2>
          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              {/** Left Side - Image */}
              <div className="mx-auto order-2 lg:order-1">
                <div className="relative w-auto h-110 sm:h-150 rounded mt-3 sm:mt-0">
                  <img
                    src={assets_manager.consultation_image}
                    alt="Founder"
                    className="h-full rounded object-cover"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div className="space-y-1 sm:space-y-4 text-gray-800 flex flex-col flex-1 gap-4">
                  {content.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--color-bg-warm)">
        <div className="lg:max-w-7xl mx-auto py-12 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-5">
            {content.points.title}
          </h2>

          <motion.ul
            key={language}
            className="grid grid-cols-1 sm:grid-cols-2 md:ml-20 gap-x-10 gap-y-2 md:gap-y-10 text-gray-800"
            variants={listContainerVariables}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {content.points.items.map((point) => (
              <motion.li
                key={point.title}
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
                  <span className="text-xl sm:text-3xl text-gray-800">{point.title}</span>
                  <span className="transition-colors duration-300 group-hover:text-(--color-text-dark) text-base sm:text-xl text-gray-500">
                  {point.text}
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
