import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection";
import Footer from "../components/ReusableComponents/Footer";
import ContactForm from "../components/ReusableComponents/ContactForm";
import CoachingServiceCard from "../components/ReusableComponents/CoachingServiceCard"
import { useLanguage } from "../context/LanguageContext";

const Mentorship = () => {
  const { t } = useLanguage();
  const content = t.coachingPage;
  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-10">
            {content.title}
          </h2>
          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto md:w-160 rounded mt-7 lg:mt-0">
                  <img
                    src={assets_manager.services}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col text-xl">
                <div className="space-y-4 text-base sm:text-xl text-gray-900 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed">
                    {content.paragraphOne}
                  </p>

                  <p className="leading-relaxed">
                    {content.paragraphTwo}
                  </p>

                  <p className="leading-relaxed">
                    {content.paragraphThree}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--color-bg-warm)">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-10">
            {content.title2}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-left text-base sm:text-xl text-gray-900">
            <p className="leading-relaxed">
              {content.paragraphFour}
            </p>

            <p className="leading-relaxed">
              {content.paragraphFive}
            </p>
          </div>
        </div>
      </div>

      <CoachingServiceCard />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Mentorship;
