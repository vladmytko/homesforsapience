import React from "react";
import { ServicesItems } from "./ServicesItems";
import Button from "../../ReusableComponents/Button";
import { useLanguage } from "../../../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage(); 

  return (
    <section
      id="Services"
      className="w-full bg-(--color-bg-warm) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-10 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-4xl lg:text-5xl  mb-10 ">
          {t.homePageServicesItems.sectionTitle}
        </h2>

        <div className="container mx-auto px-1 sm:py-10 ">
          <div className="grid lg:grid-cols-3">
            {ServicesItems.map((item) => {
              const translated = t.homePageServicesItems[item.id];
              return(
              <div
                key={item.id}
                className="bg-(--color-bg-warm) border-3 border-(--color-brand-primary) flex flex-col min-h-100 max-h-150 max-w-140 justify-self-center mb-5 rounded-3xl drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)] hover:bg-amber-50 mx-1 sm:mx-2"> 
                <div className="p-6 flex flex-col flex-1 ">
                  <h3 className="text-xl md:text-2xl sm:text-4xl font-medium px-2">
                    {translated.title}
                  </h3>
                  <div className="flex flex-col gap-6 py-5 px-2">
                    {(Array.isArray(translated.description)
                      ? translated.description
                      : String(translated.description).split(".").filter(Boolean)
                    ).map((line, index) => (
                      <p key={index} className="text-base sm:text-xl leading-relaxed">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                 <div className="mt-auto pb-4 [&>a]:block sm:[&>a]:w-3/4 [&>a]:mx-auto [&>a]:text-center">
                    <Button 
                    title={t.homePageServicesItems.button}
                    link={item.link} 
                  />
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
