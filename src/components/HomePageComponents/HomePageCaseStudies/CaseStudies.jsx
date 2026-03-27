import React from "react";
import { CaseStudiesItems } from "./CaseStudiesItems";
import Button from "../../ReusableComponents/Button";

const CaseStudies = () => {
  return (
    <section
      id="CaseStudiesIntro"
      className="w-full bg-(--color-bg-warm2) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-10 px-6">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl font-medium mb-10 ">
          Case Studies
        </h2>

        <div className="container mx-auto">
          <div className="grid sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CaseStudiesItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 flex flex-col max-h-120 sm:min-h-125 max-w-90 rounded-3xl justify-self-center drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)]
                            md:last:col-span-2 md:last:justify-self-center md:last:max-w-90
                            xl:last:col-span-1 xl:last:justify-self-auto"
              >
                {/* image + optional badge */}
                <div className="relative h-[40vh] overflow-hidden object-cover p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className=" p-3 flex flex-col flex-1 ">
                  <h2 className="text-2xl font-medium mb-2 ml-2">
                    {item.intro}
                  </h2>
                  <h3 className="text-base text-gray-700 font-medium mb-3 ml-1 flex gap-2">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      />
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                      />
                    </svg>

                    {item.title}
                  </h3>
                  <div className="flex gap-2 px-2 text-center bg-gray-200 rounded-2xl mt-4">
                    {(Array.isArray(item.description)
                      ? item.description
                      : String(item.description).split(".").filter(Boolean)
                    ).map((line, index) => (
                      <p key={index} className="text-base leading-relaxed">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-11 pb-4 items-center text-center">
          <Button title="Explore Case Studies" link="/projects" />
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
