import React from "react";

const SupportServiceCards = () => {
  return (
    <section
      id="free-call"
      className="w-full bg-(--color-bg-gray) overflow-hidden"
    >
      <div className="max-w-7xl mx-auto py-12 sm:py-12 px-4 sm:px-6 lg:px-12">
        <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl mb-5">
          Book Free Call
        </h2>

        <div className="px-5">
          <p className="text-base sm:text-xl my-5 text-gray-900">
            Each call is tailored to your situation — no generic advice or
            templates.
          </p>

          <p className="text-base sm:text-xl my-5 text-gray-900">
            If you have questions about property investment or would like to
            understand how I can help you, you can start with a free 15-minute
            introductory call.
          </p>

          <p className="text-base sm:text-xl my-5 text-gray-900">
            Property Buying Support — £500. This service includes personalised
            support during the property buying process, including:
          </p>

          <div className="text-base sm:text-xl my-5 mb-10 text-gray-900">
            <ul className="list-disc pl-5 space-y-1">
              <li>one full day of property viewings</li>
              <li>assistance evaluating potential properties</li>
              <li>negotiation support with estate agencies</li>
              <li>practical guidance throughout the process</li>
            </ul>
          </div>

          <p className="text-base sm:text-xl my-5 text-gray-900 mb-10">
            The free introductory call allows us to discuss your goals and
            determine whether this service is the right fit for your situation.
          </p>

          <div className="mt-auto mx-auto">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3VUVI7gY4gj6XKTDQAZpTHjVGAurynnmuIEAPN_xwhdFP4cXyAfPxVPOPpEVVe45cvCKDrRPfP"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-(--color-button-primary) text-(--color-text-white) px-8 py-4 rounded-full hover:bg-(--color-button-primary-hover) transition-colors duration-300"
            >
              Book Free Call
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
