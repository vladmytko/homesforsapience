import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Footer from "../components/ReusableComponents/Footer";
import Button from "../components/ReusableComponents/Button";

const Blog = () => {
  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-2 sm:mb-10">
            Blog
          </h2>

          <div className="justify-center">
            <div className="flex flex-col lg:flex-row lg:gap-10 sm:py-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto max-w-140 rounded mt-2 sm:mt-0">
                  <img
                    src={assets_manager.podcase_image}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div className="space-y-4 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed text-xl sm:text-3xl">
                    The Scottish Property Podcast
                  </p>

                  <p className="leading-relaxed">
                    A weekly podcast focused on keeping property investors
                    informed and educated on the Scottish property market.
                    Co-hosts Nick Ponty and Steven Clark share their own
                    experiences, answer questions and talk to experts in the
                    industry.
                  </p>

                   <div className="mb-5 sm:mb-0 sm:py-10">
                    <a
                      href="https://www.youtube.com/watch?v=-7_rtzFW8DE&t=490s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      YouTube
                    </a>

                    <a
                      href="https://creators.spotify.com/pod/profile/scottish-property-podcast5/episodes/Russian-scholar-turned-Glasgow-investor-with-Timur-Khismatullin-e2k4qog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10 sm:py-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto max-w-140 rounded mt-2 sm:mt-0">
                  <img
                    src={assets_manager.fundraiser_image}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div className="space-y-4 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed text-xl sm:text-3xl mt-5 sm:mt-0">
                    Fundraiser for The Prince & Princess of Wales Hospice
                  </p>

                  <p className="leading-relaxed">
                    Help Timur Khismatulin raise money to support The Prince &
                    Princes of Wales Hospice.
                  </p>

                  <div className="py-10">
                    <a
                      href="https://www.justgiving.com/page/timur-khismatullin-1?utm_medium=FR&utm_source=CL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      Read More
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

export default Blog;
