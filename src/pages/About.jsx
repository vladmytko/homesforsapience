import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Button from "../components/ReusableComponents/Button";
import TestimonialsSection from "../components/HomePageComponents/HomeTestimonials/TestimonialSection"
import Footer from '../components/ReusableComponents/Footer'
import ContactForm from '../components/ReusableComponents/ContactForm'

function About() {
  return (
    <section className="overflow-hidden">
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl font-medium mb-10">
            Consultancy
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
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
            What we can cover
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-800 text-xl">
            <li className="flex items-start gap-3">
              <img
                src={assets_manager.tick}
                alt="tick"
                className="w-8 h-8 shrink-0"
              />
              <span>Reviewing your current financial position</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src={assets_manager.tick}
                alt="tick"
                className="w-8 h-8 shrink-0"
              />
              <span>Investment strategies and market opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src={assets_manager.tick}
                alt="tick"
                className="w-8 h-8 shrink-0"
              />
              <span>Understanding mortgages and funding options</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src={assets_manager.tick}
                alt="tick"
                className="w-8 h-8 shrink-0"
              />
              <span>Analysing potential deals</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src={assets_manager.tick}
                alt="tick"
                className="w-8 h-8 shrink-0"
              />
              <span>Planning refurbishment or rental strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src={assets_manager.tick}
                alt="tick"
                className="w-8 h-8 shrink-0"
              />
              <span>Scaling an existing portfolio</span>
            </li>
          </ul>

          <p className="text-center text-xl mt-10">
            Each consultation is tailored to your situation — no generic advice
            or templates. You will also receive a recording of the session, so
            you can revisit key insights and implement them confidently.
          </p>
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
      <ContactForm/>
      <Footer />

    </section>
  );
}

export default About;
