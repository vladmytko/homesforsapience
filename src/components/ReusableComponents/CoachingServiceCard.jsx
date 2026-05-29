import React from "react";

const CoachingServiceCard = () => {
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
            If you have questions about property investment or would like to
            understand how I can help you, you can start with a free 15-minute
            introductory call.
          </p>

          <p className="text-base sm:text-xl my-5 text-gray-900">
            £250 per month. Coaching service includes two one-hour calls per month, with recordings provided after each session.
          </p>

          <p className="text-base sm:text-xl my-5 text-gray-900">
            It is designed for individuals who want a deeper understanding of property investment processes and strategies, rather than simply finding a quick solution to a specific situation. 
          </p>

          <p className="text-base sm:text-xl my-5 text-gray-900">
            The focus is on building long-term knowledge, confidence, and decision-making skills through personalised guidance and ongoing support.
          </p>

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

export default CoachingServiceCard;
