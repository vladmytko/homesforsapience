import React from "react";
import { assets_manager } from "../../assets/assets_manager";
import Button from "../ReusableComponents/Button";

const PageAbout = () => {
  return (
    <section
      id="AboutIntro"
      className="w-full bg-(--color-bg-gray) overflow-hidden"
    >
      {/** px = horizontal (left + right) */}
      {/** py = vertical (top + bottom) */}
      <div className="max-w-6xl mx-auto py-12 sm:py-5 px-6 lg:px-0">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl font-medium mb-10">
          Founder
        </h2>

        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/** Left Side - Image */}
          <div className="lg:w-2/5 order-2 lg:order-1">
            <div className="relative h-auto w-100 lg:w-112.5 rounded">
              <img
                src={assets_manager.home_founder}
                alt="Founder"
                className="w-full h-full rounded"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Text */}

          <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col">
            <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
              Timur Khismatullin
            </h2>

            <div className="space-y-4 text-gray-700 flex flex-col flex-1 gap-4">
              <p className="leading-relaxed">
                Expert and mentor in buying and investing in UK property.
              </p>

              <p className="leading-relaxed">
                Property is one of the most powerful ways to build long-term
                wealth. I help individuals and investors make smarter decisions
                when purchasing property in the UK — whether it’s for living,
                business, or investment.
              </p>

              <p className="leading-relaxed">
                My goal is simple: help you choose the right property and avoid
                the mistakes many buyers make.
              </p>

              <div className="mt-auto mb-10">
                <Button title="Read More" link={"/about"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageAbout;
