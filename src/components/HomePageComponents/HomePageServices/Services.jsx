import React from "react";
import { ServicesItems } from "./ServicesItems";
import Button from "../../ReusableComponents/Button";

const Services = () => {
  return (
    <section
      id="Services"
      className="w-full bg-(--color-bg-warm) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-10 px-6 lg:px-8">
        <h2 className="text-(--color-text-dark) text-3xl sm:text-4xl lg:text-5xl  mb-10 ">
          Property Investment Guidance
        </h2>

        <div className="container mx-auto px-1 sm:py-10 ">
          <div className="grid md:grid-cols-2">
            {ServicesItems.map((item) => (
              <div
                key={item.id}
                className="bg-(--color-bg-warm) border-3 border-(--color-brand-primary) border- flex flex-col h-100 max-w-140 justify-self-center mb-5 rounded-3xl drop-shadow-[0_8px_15px_rgba(0,0,0,0.15)] hover:bg-amber-50"> {/**md:last:col-span-2 md:last:justify-self-center xl:last:col-span-1 xl:last:justify-self-auto */} 
                <div className="p-6 flex flex-col flex-1 ">
                  <h3 className="text-3xl sm:text-4xl font-medium px-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-col gap-6 py-5 px-2">
                    {(Array.isArray(item.description)
                      ? item.description
                      : String(item.description).split(".").filter(Boolean)
                    ).map((line, index) => (
                      <p key={index} className="text-xl leading-relaxed">
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                 <div className="mt-auto pb-4 [&>a]:block [&>a]:w-3/4 [&>a]:mx-auto [&>a]:text-center">
                    <Button 
                    title="Read More"
                    link={item.link} 
                  />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
