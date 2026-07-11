import React from "react";
import Button from "./Button";
import { assets_manager } from "../../assets/assets_manager";
import { useLanguage } from "../../context/LanguageContext";

const ServiceCards = () => {
  const { t } = useLanguage();
  const content = t.consultationPage.costOfSessions;

  return (
    <section id="free-call">
      <div className="w-full bg-(--color-bg-warm2)">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-8 px-3 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-10">
            {content.title}
          </h2>

          <p className="text-base sm:text-xl my-5 text-gray-600">
            {content.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl lg:ml-15 mt-4 ">
            <div className="bg-white mx-auto rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-8 py-10 flex flex-col  max-h-170 max-w-110 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white hover:border-yellow-500">
              <h3 className="text-(--color-text-dark) text-2xl sm:text-3xl font-medium md:mb-2 lg:mb-8 text-center">
                {content.card1.title}
              </h3>

              <ul className="list-disc space-y-4 text-(--color-text-dark) text-base sm:text-lg leading-relaxed lg:p-3">
                {content.card1.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <img
                      src={assets_manager.tick_small}
                      alt=""
                      className="w-6 h-6 mt-0.5"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-(--color-text-dark) text-3xl md:text-4xl font-medium mt-14 mb-10">
                £170
              </p>

              <div className="mt-auto mx-auto">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LO0rJdLPQcX0luj5EmTTjfleiRTmm1uskBSFhKAK-w8BJiJCuTf15VbVUxt9BTWaa0rAzwfuF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                >
                  {content.card1.button}
                </a>
              </div>
            </div>

            <div className="mx-auto bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-8 py-10 flex flex-col min-h-170 max-h-170 max-w-110 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white hover:border-yellow-500">
              <h3 className="text-(--color-text-dark) text-2xl sm:text-3xl font-medium md:mb-2 lg:mb-8 text-center">
                {content.card2.title}
              </h3>

              <div className="text-(--color-text-dark) text-base leading-relaxed space-y-5 lg:p-3">
                <p>{content.card2.paragraph1}</p>

                <div>
                  <p className="mb-2">{content.card2.paragraph2}</p>
                  <ul className="space-y-2">
                    {content.card2.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <img
                          src={assets_manager.tick_small}
                          alt=""
                          className="w-6 h-6 mt-0.5"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto mx-auto">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VUVI7gY4gj6XKTDQAZpTHjVGAurynnmuIEAPN_xwhdFP4cXyAfPxVPOPpEVVe45cvCKDrRPfP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
                >
                  {content.card2.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
