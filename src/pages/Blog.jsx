import React, { useState } from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Footer from "../components/ReusableComponents/Footer";
import Button from "../components/ReusableComponents/Button";

const Blog = () => {
  const [showFullWebinar, setShowFullWebinar] = useState(false);
  return (
    <section>
      <Navbar />
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}

      <div className="bg-(--color-bg-gray) w-full">
        <div className="lg:max-w-7xl mx-auto py-10 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl mb-5">
            Blog
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
                    WEBINAR: Private Investors in Property (in Russian)
                  </p>

                  <p className="text-gray-900 font-semibold">Date: 17 June 2026</p>
                  <p className="text-gray-900 font-semibold">Time: 7:00 PM (UK time)</p>
                  <p className="text-gray-900 font-semibold">Price: £15</p>

                  <p className="leading-relaxed">
                    Looking to buy a property but don’t have enough capital?
                  </p>

                  <p className="leading-relaxed">
                    Over the past few years, I have raised more than £1 million
                    from private investors to finance property projects across
                    the UK. In this webinar, I’ll share the practical system
                    that I personally use.
                  </p>

                  <p className="leading-relaxed">What you’ll learn:</p>

                  <ul className="list-disc space-y-4 text-(--color-text-dark) text-base sm:text-lg leading-relaxed lg:p-3">
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>Where to find private investors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>How to build trust and credibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>
                        How to present property deals effectively
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>Which numbers matter most to investors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>How to structure funding and investment deals</span>
                    </li>
                  </ul>

                  <p className="leading-relaxed">
                    This webinar is suitable for both new property investors and those looking to scale their existing property portfolio.
                  </p>

                  <p className="leading-relaxed">A recording of the webinar will be available to all registered participants.</p>



                  {/** In runssion version */}

                  <p className="leading-relaxed text-2xl sm:text-3xl">
                    ВЕБИНАР: Частные инвесторы в недвижимость (на русском языке)
                  </p>

                  <p className="text-gray-900 font-semibold">Дата: 17 June 2026</p>
                  <p className="text-gray-900 font-semibold">Время: 7:00 PM (UK time)</p>
                  <p className="text-gray-900 font-semibold">Цена: £15</p>

                  <p className="leading-relaxed">
                    Хотите купить объект, но не хватает собственных средств?
                  </p>

                  <p className="leading-relaxed">
                    За последние годы я привлёк более £1 миллиона от частных инвесторов для финансирования проектов недвижимости в Великобритании. На этом вебинаре я поделюсь практической системой, которую использую сам.

                  </p>

                  <p className="leading-relaxed">Вы узнаете:</p>

                  <ul className="list-disc space-y-4 text-(--color-text-dark) text-base sm:text-lg leading-relaxed lg:p-3">
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>Где искать частных инвесторов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>Как выстраивать доверие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>
                        Как презентовать проекты
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>Какие цифры важны для инвестора</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <img
                        src={assets_manager.tick_small}
                        alt=""
                        className="w-6 h-6 mt-0.5"
                      />
                      <span>Как структурировать финансирование и сделки</span>
                    </li>
                  </ul>

                  <p className="leading-relaxed">
                    Вебинар будет полезен как начинающим инвесторам, так и тем, кто хочет масштабировать существующий портфель недвижимости.

                  </p>

                  <p className="leading-relaxed">Запись вебинара будет доступна всем зарегистрированным участникам.</p>

                  {/** End runssion version */}

                  <div className="mb-5 py-3 sm:py-5">
                    <a
                      href="https://buy.stripe.com/28E7sEcWW4t2ffJ4kF83C00"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      Registration
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => setShowFullWebinar(!showFullWebinar)}
                  className="mt-4 text-(--color-button-primary) font-medium text-left cursor-pointer hover:text-amber-500"
                >
                  {showFullWebinar ? "Show Less ▲" : "Read More ▼"}
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
                    Property Investments in Scotland (Free)
                  </p>

                  <p className="text-gray-700">29 Feb 2026</p>

                  <p className="leading-relaxed">
                    On the market: £58,000. Purchased for: £33,500. Feel the
                    difference. A professional investor doesn’t wait for
                    opportunities — they create them. It isn’t luck. It’s a
                    skill. And skills can be learned.
                  </p>

                  <p className="leading-relaxed">
                    Complete the short registration form and a presentation link
                    will be sent to you shortly after submission.
                  </p>

                  <div className="mb-5 py-3 sm:py-5">
                    <a
                      href="https://forms.gle/ca8CTXCUXXDgUQrTA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                    >
                      Recording
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
                    The Scottish Property Podcast
                  </p>

                  <p className="text-gray-700">25 Mar 2024</p>

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
                    Fundraiser for The Prince & Princess of Wales Hospice
                  </p>

                  <p className="text-gray-700">23 Aug 2025</p>

                  <p className="leading-relaxed">
                    Help Timur Khismatulin raise money to support The Prince &
                    Princes of Wales Hospice.
                  </p>

                  <div className="mb-7">
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
