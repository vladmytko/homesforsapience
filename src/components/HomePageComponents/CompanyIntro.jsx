import React from "react";
import Button from "../ReusableComponents/Button";
import { useLanguage } from "../../context/LanguageContext";

const CompanyIntro = () => {
  const { t } = useLanguage();
  const content = t.companyIntro;

  return (
    <section
      id="CompanyIntro"
      className="w-full bg-(--color-bg-warm) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-20 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl mb-10">
          {content.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 text-left text-base sm:text-xl">
          <p className="text-gray-800 leading-relaxed">
            {content.paragraphOne}
          </p>

          <p className="text-gray-800 leading-relaxed">
             {content.paragraphTwo}
          </p>
        </div>
        <div className="mt-15">
          <Button
            title={content.button}
            link={'/consultation'} 
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
