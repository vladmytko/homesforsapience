import React from "react";
import { CaseStudiesItems } from "./CaseStudiesItems";
import Button from "../../ReusableComponents/Button";

const CaseStudies = () => {
  return (
    <section
      id="CaseStudiesIntro"
      className="w-full bg-(--color-bg-warm2) overflow-hidden"
    >
      <div className="max-w-6xl mx-auto py-12 sm:py-10 px-6">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl  mb-10 ">
          Case Studies
        </h2>

        <div className="container mx-auto">
          <div className="grid sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CaseStudiesItems.map((item) => (
              <div
                key={item.id}
                className="bg-(--color-brand-secondary) flex flex-col max-h-110 sm:min-h-110 max-w-90 rounded-3xl justify-self-center drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)]
                            md:last:col-span-2 md:last:justify-self-center md:last:max-w-90
                            xl:last:col-span-1 xl:last:justify-self-auto"
              >
                {/* image + optional badge */}
                <div className="relative h-[40vh] overflow-hidden object-cover p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-70 object-cover rounded-xl"
                  />
                </div>
                <div className="text-xl px-5 flex flex-row justify-between">
                  <p className="">{item.title}</p>

                  <p className="">£150,000</p>
                </div>

          

                <div className="px-3 mb-2">
                  <div className="flex gap-2 px-2 text-center bg-(--color-bg-warm2) rounded-2xl mt-4">
                    {(Array.isArray(item.description)
                      ? item.description
                      : String(item.description).split(".").filter(Boolean)
                    ).map((line, index) => (
                      <p key={index} className="text-base leading-relaxed ">
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
