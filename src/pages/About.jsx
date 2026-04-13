import React from "react";
import { assets_manager } from "../assets/assets_manager";
import Footer from "../components/ReusableComponents/Footer";
import Navbar from "../components/ReusableComponents/Navbar";
import Button from "../components/ReusableComponents/Button";

const About = () => {
  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-10">
            Meet The Founder
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
                <div className="space-y-4 text-gray-700 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed">
                    My name is Timur Khismatullin. I moved to Scotland in 2010
                    and began my journey in property in 2016. That same year, I
                    completed my first investment courses and realised just how
                    crucial mentors, community, and hands-on experience truly
                    are. I’ve always been driven by the idea of financial
                    freedom — earning from something you build once, rather than
                    staying stuck in the constant daily grind.
                  </p>

                  <p className="leading-relaxed">
                    My strategy focuses on purchasing, financing, and
                    refurbishing residential properties, followed by long-term
                    letting. Over the years, I’ve completed dozens of deals,
                    working with both bank and private finance. I collaborate
                    closely with builders, brokers, and solicitors, and I
                    understand the entire process from the inside out.
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
                <div className="space-y-4 text-gray-700 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed">
                    Today, I continue to invest personally while also helping
                    others — sharing my experience, explaining how to assess a
                    property, what to look out for, how to build a sound
                    strategy, and how to avoid the most common mistakes. I work
                    with clients who want to buy a home for themselves as well
                    as those exploring property as an investment.
                  </p>

                  <p className="leading-relaxed">
                    If you want to feel confident navigating the world of UK
                    property, I’d be delighted to meet you — and I’m here to
                    help.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-10">
              <Button title="Book Free Call" link={"/consultation#free-call"} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
