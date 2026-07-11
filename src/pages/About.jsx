import React from "react";
import { assets_manager } from "../assets/assets_manager";
import Footer from "../components/ReusableComponents/Footer";
import Navbar from "../components/ReusableComponents/Navbar";
import Button from "../components/ReusableComponents/Button";
import { useLanguage } from "../context/LanguageContext";


const About = () => {
  const { t } = useLanguage();
    const content = t.aboutPage;
  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-10">
            {content.title}
          </h2>
          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10">
              {/** Right Side - Image */}
              <div className=" order-1 lg:order-2">
                <div className="relative h-auto w-auto max-w-140 rounded mb-2 sm:mb-0 sm:mt-5">
                  <img
                    src={assets_manager.about_image1}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* Left SIDE - Text */}

              <div className="lg:w-1/2 order-2 lg:order-1 flex flex-col text-base sm:text-xl">
                <div className="space-y-4 text-gray-800 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed">
                    {content.paragraphOne}
                  </p>

                  <p className="leading-relaxed">
                    {content.paragraphTwo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:max-w-7xl mx-auto px-6 lg:px-8">
          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10 sm:py-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto max-w-140 rounded mt-2 sm:mt-0">
                  <img
                    src={assets_manager.about_image2}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div className="space-y-4 text-gray-800 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed">
                    {content.paragraphThree}
                  </p>

                  <p className="leading-relaxed">
                    {content.paragraphFour}
                  </p>

                  <div className="py-5">
                    <a
                      href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VUVI7gY4gj6XKTDQAZpTHjVGAurynnmuIEAPN_xwhdFP4cXyAfPxVPOPpEVVe45cvCKDrRPfP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      {content.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
