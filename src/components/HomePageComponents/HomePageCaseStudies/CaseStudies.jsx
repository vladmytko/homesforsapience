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
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl font-medium mb-10 ">
          Case Studies
        </h2>

        <div className="container mx-auto">
          <div className="grid sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CaseStudiesItems.map((item) => (
              <div
                key={item.id}
                className="bg-(--color-bg-warm) flex flex-col max-h-120 sm:min-h-125 max-w-100 rounded-3xl mb-5 justify-self-center drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)]
                            md:last:col-span-2 md:last:justify-self-center md:last:max-w-100
                            xl:last:col-span-1 xl:last:justify-self-auto"
              >
                {/* image + optional badge */}
                <div className="relative rounded-xl h-[40vh] overflow-hidden object-cover ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 ">
                  <h3 className="text-3xl font-medium mb-3 text-center">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-2 py-1 px-2">
                    {(Array.isArray(item.description)
                      ? item.description
                      : String(item.description).split(".").filter(Boolean)
                    ).map((line, index) => (
                      <p key={index} className="text-base leading-relaxed">
                        {line.trim()}.
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
