import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Button from "../components/ReusableComponents/Button";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection";
import Footer from "../components/ReusableComponents/Footer";
import ContactForm from "../components/ReusableComponents/ContactForm";

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

          <div className="space-y-4 text-gray-700 flex flex-col flex-1 gap-4">
            <p className="leading-relaxed">
              From deal sourcing and finance to renovation decisions, letting
              strategies, and exit planning — I support you at every stage of
              the investment journey. You don’t have to navigate the process
              alone.
            </p>

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
              strategic nature of the support they receive.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-(--color-bg-warm2)">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-8 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
            Cost of Sessions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl">
            <div className="bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-8 py-10 flex flex-col h-160 max-w-120">
              <h3 className="text-(--color-text-dark) text-3xl font-medium mb-10 text-center">
                Personal Consultation
              </h3>

              <ul className="space-y-2 text-(--color-text-dark) text-lg leading-relaxed">
                <li>✓ clear direction</li>
                <li>✓ realistic next steps</li>
                <li>✓ improved understanding of risks and opportunities</li>
                <li>✓ greater confidence in your decisions</li>
              </ul>

              <p className="text-(--color-text-dark) text-4xl font-medium mt-14 mb-10">
                £170
              </p>

              <div className="mt-auto mx-auto">
                <Button title="Book Consultation" link={"/about"} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-8 py-10 flex flex-col h-160 max-w-120">
              <h3 className="text-(--color-text-dark) text-3xl font-medium mb-8 text-center">
                Free 15-min Call
              </h3>

              <div className="text-(--color-text-dark) text-base leading-relaxed space-y-5">
                <p>
                  If you have questions about property investment or would like
                  to understand how I can help you, you can start with a free
                  15-minute introductory call.
                </p>

                <div>
                  <p className="mb-2">
                    This is an informal conversation where we can:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>discuss your goals</li>
                    <li>clarify your current situation</li>
                    <li>
                      explain how coaching or consultation could support you
                    </li>
                    <li>answer any initial questions</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto mx-auto">
                <Button title="Book Free Call" link={"/about"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </section>
  );
};

export default Mentorship;
