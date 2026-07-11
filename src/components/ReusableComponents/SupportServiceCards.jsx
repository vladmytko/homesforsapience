import React from "react";
import { assets_manager } from "../../assets/assets_manager";
import { useLanguage } from "../../context/LanguageContext";

const SupportServiceCards = () => {
  const { t } = useLanguage();
  const content = t.supportPage.bookFreeCallSection;

  return (
    <section
      id="free-call"
      className="w-full bg-(--color-bg-gray) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-12 px-4 sm:px-6 lg:px-12">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-5">
          {content.title}
        </h2>

        <div className="px-5">

          {content.paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph} className="text-base sm:text-xl my-5 text-gray-900">
              {paragraph}
            </p>
          ))}

          <div className="text-base sm:text-xl my-5 mb-10 text-gray-900">
            <ul className="list-disc pl-5 space-y-1">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <img src={assets_manager.tick_small} alt="" className="w-6 h-6 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-base sm:text-xl my-5 text-gray-900 mb-10">
            {content.paragraphs[2]}
          </p>

          <div className="mt-auto mx-auto">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VUVI7gY4gj6XKTDQAZpTHjVGAurynnmuIEAPN_xwhdFP4cXyAfPxVPOPpEVVe45cvCKDrRPfP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
            >
              {content.button}
            </a>
          </div>
        </div>

        {/* ✓ Strategy & Criteria Definition
✓ Viewings Organisation
✓ Guided Viewing Day
✓ Independent Viewings
✓ Negotiation & Deal Support */}
      </div>
    </section>
  );
};

export default SupportServiceCards;
