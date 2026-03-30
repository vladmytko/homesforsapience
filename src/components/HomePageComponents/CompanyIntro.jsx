import React from "react";
import Button from "../ReusableComponents/Button";

const CompanyIntro = () => {
  return (
    <section
      id="CompanyIntro"
      className="w-full bg-(--color-bg-warm) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl mb-10">
          Homes for sapience - property investment and consultancy
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-left text-xl">
          <p className="text-gray-800 leading-relaxed">
            Founded in 2017 as an investment company and expanding to
            consultancy in 2022, Homes for Sapiens is a trusted advisor for
            navigating the UK property market. Whether you’re buying a home or
            exploring investment opportunities, we provide end-to-end support to
            simplify the process.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Our services cover all stages of property acquisition, including
            property search, financing, AML compliance, and tax guidance. With
            connections to top brokers, lenders, and legal experts, we ensure
            favourable terms and a smooth transaction experience.
          </p>
        </div>
        <div className="mt-15">
          <Button
            title="Shedule a Consult"
            link={'/about'} 
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
