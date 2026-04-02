import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Button from "../components/ReusableComponents/Button";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection";
import Footer from "../components/ReusableComponents/Footer";
import ContactForm from "../components/ReusableComponents/ContactForm";
import ServiceCards from "../components/ReusableComponents/ServiceCards";

const Mentorship = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl font-medium mb-10">
            Mentorship
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
                    With nearly a decade of hands-on experience in the UK
                    property market — across sourcing, mortgages, renovation,
                    letting, and exit strategies — I share what truly works.
                  </p>

                  <p className="leading-relaxed">
                    This is not theory, but real, up-to-date experience based on
                    real cases. My clients consistently say I save them months —
                    and sometimes even years — of costly trial and error.
                  </p>

                  <p className="leading-relaxed">
                    From deal sourcing and finance to renovation decisions,
                    letting strategies, and exit planning — I support you at
                    every stage of the investment journey. You don’t have to
                    navigate the process alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--color-bg-warm)">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
            What we can cover
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-left text-xl text-gray-900">
            <p className="leading-relaxed">
              Structured three-month coaching programme designed to help you
              move forward quickly. If you already have investment experience, I
              will help you optimise your portfolio and release equity to
              support further growth. Together, we can explore more advanced
              strategies such as HMOs, the BRRRR method, or short-term lets —
              always aligned with your long-term goals.
            </p>

            <p className="leading-relaxed">
              This is not motivational fluff. Every session is structured,
              practical, and focused on helping you take clear next steps
              without feeling overwhelmed. My clients value the hands-on and
              strategic nature of the support they receive. You’ll leave each
              session with clarity, confidence, and a clear plan of action.
            </p>
          </div>
        </div>
      </div>

      <ServiceCards />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Mentorship;
