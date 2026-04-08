import React from "react";
import { CaseStudiesItems } from "./CaseStudiesItems";
import Button from "../../ReusableComponents/Button";
import { Link } from "react-router-dom";

const HomeCaseStudies = () => {
  return (
    <section
      id="CaseStudiesIntro"
      className="w-full bg-(--color-bg-warm2) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-10 px-6">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl  mb-10 ">
          Case Studies
        </h2>

        <div className="container mx-auto">
          <div className="grid sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {CaseStudiesItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group bg-transparent flex flex-col h-100 max-w-90 rounded-3xl justify-self-center transform-gpu transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* image + optional badge */}
                <div className="relative w-full h-100 rounded-3xl overflow-hidden shadow-lg transition duration-500 ease-out group-hover:shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-auto h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />

                  {/* gradient overlay */}
                  {/* <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent transition duration-500 ease-out group-hover:from-black/95 group-hover:via-black/45"></div> */}
                  <div className="absolute inset-0 bg-white/0 transition duration-500 ease-out group-hover:bg-white/5"></div>

                  {/* content */}
                  <div className="absolute bottom-0 p-5 text-white flex flex-col gap-3 transition duration-500 ease-out group-hover:-translate-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <p className="text-sm text-gray-200">
                      Cozy wooden chalet nestled in the Swiss Alps, offering a warm fireplace and scenic views.
                    </p>

                    <div className="flex gap-2 text-xs">
                      <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm transition duration-500 ease-out group-hover:bg-white/30">
                        Semi-detached
                      </span>
                      <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm transition duration-500 ease-out group-hover:bg-white/30">
                        4 Bedroom
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
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

export default HomeCaseStudies;
