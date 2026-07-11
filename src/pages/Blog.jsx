import React, { useState } from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Footer from "../components/ReusableComponents/Footer";
import Button from "../components/ReusableComponents/Button";
import { useLanguage } from "../context/LanguageContext";

const Blog = () => {
  const [showFullWebinar, setShowFullWebinar] = useState(false);
  const { t } = useLanguage();
  const content = t.blog;


  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl mb-5">
            {content.title}
          </h2>

          <div className="justify-center space-y-15 md:space-y-3">
            <div className="flex flex-col lg:flex-row lg:gap-10 sm:py-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto max-w-140 rounded mt-2 sm:mt-0">
                  <img
                    src={assets_manager.webinar_image}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div
                  className={`flex flex-col flex-1 gap-4 overflow-hidden transition-all duration-300 ${
                    showFullWebinar ? "max-h-500" : "max-h-90"
                  }`}
                >
                  <p className="leading-relaxed text-2xl sm:text-3xl">
                    {content.webinar2.title}
                  </p>

                  {/* <p className="text-gray-900 font-semibold">{content.webinar2.date}</p>
                  <p className="text-gray-900 font-semibold">{content.webinar2.time}</p> */}
                  <p className="text-gray-900 font-semibold">{content.webinar2.price}</p>

                  <p className="leading-relaxed">
                    {content.webinar2.paragraph1}
                  </p>

                  <p className="leading-relaxed">
                    {content.webinar2.paragraph2}
                  </p>

                  <p className="leading-relaxed">{content.webinar2.pointStart}</p>

                  <ul className="list-disc space-y-4 text-(--color-text-dark) text-base sm:text-lg leading-relaxed lg:p-3">
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>{content.webinar2.point1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>{content.webinar2.point2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>
                        {content.webinar2.point1}{content.webinar2.point3}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>{content.webinar2.point4}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>{content.webinar2.point5}</span>
                    </li>
                  </ul>

                  <p className="leading-relaxed">
                    {content.webinar2.paragraph3}
                  </p>

                  <p className="leading-relaxed">{content.webinar2.paragraph4}</p>

                  <div className="mb-5 py-3 sm:py-5">
                    <a
                      href="https://buy.stripe.com/28E7sEcWW4t2ffJ4kF83C00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      {content.webinar2.button}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setShowFullWebinar(!showFullWebinar)}
                  className="mt-4 text-(--color-button-primary) font-medium text-left cursor-pointer hover:text-amber-500"
                >
                  {showFullWebinar ? content.webinar2.showLess : content.webinar2.showMore}
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10 sm:py-10">
              {/** Left Side - Image */}
              <div className=" order-2 lg:order-1">
                <div className="relative h-auto w-auto max-w-140 rounded mt-2 sm:mt-0">
                  <img
                    src={assets_manager.presentation_image}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div className="flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed text-2xl sm:text-3xl">
                    {content.webinar1.title}
                  </p>

                  <p className="text-gray-700">{content.webinar1.date}</p>

                  <p className="leading-relaxed">
                    {content.webinar1.paragraph1}
                  </p>

                  <p className="leading-relaxed">
                    {content.webinar1.paragraph2}
                  </p>

                  <div className="mb-5 py-3 sm:py-5">
                    <a
                      href="https://forms.gle/ca8CTXCUXXDgUQrTA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      {content.webinar1.button}
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
                    src={assets_manager.podcase_image}
                    alt="Founder"
                    className="w-full h-full rounded"
                  />
                </div>
              </div>

              {/* RIGHT SIDE - Text */}

              <div className="lg:w-1/2 order1 lg:order-2 flex flex-col text-base sm:text-xl">
                <div className="space-y-2 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed text-2xl sm:text-3xl">
                    {content.podcast.title}
                  </p>

                  <p className="text-gray-700">{content.podcast.date}</p>

                  <p className="leading-relaxed">
                    {content.podcast.paragraph}
                  </p>

                  <div className="mb-5 sm:mb-0 sm:py-10">
                    <a
                      href="https://www.youtube.com/watch?v=-7_rtzFW8DE&t=490s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border-3 border-red-800 text-red-800 px-8 py-4 rounded-full hover:bg-red-800 hover:text-white transition-colors duration-300 font-medium"
                    >
                      YouTube
                    </a>

                    <a
                      href="https://creators.spotify.com/pod/profile/scottish-property-podcast5/episodes/Russian-scholar-turned-Glasgow-investor-with-Timur-Khismatullin-e2k4qog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 border-3 border-green-600 bg-white text-green-600 px-8 py-4 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300 font-medium"
                    >
                      Spotify
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-10 sm:my-10">
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
                <div className="space-y-3 flex flex-col flex-1 gap-4">
                  <p className="leading-relaxed text-2xl sm:text-3xl">
                    {content.fundraiser.title}
                  </p>

                  <p className="text-gray-700">{content.fundraiser.date}</p>

                  <p className="leading-relaxed">
                    {content.fundraiser.paragraph}
                  </p>

                  <div className="mb-7">
                    <a
                      href="https://www.justgiving.com/page/timur-khismatullin-1?utm_medium=FR&utm_source=CL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      {content.fundraiser.button}
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
