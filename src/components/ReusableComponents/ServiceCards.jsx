import React from "react";
import Button from "./Button";

const ServiceCards = () => {
  return (
    <section id="free-call">
      <div className="w-full bg-(--color-bg-warm2)">
        <div className="lg:max-w-7xl mx-auto py-12 sm:py-8 px-6 lg:px-8">
          <h2 className="text-(--color-text-dark) text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
            Cost of Sessions
          </h2>

          <p className="text-xl my-5 text-gray-600">
            Each consultation is tailored to your situation — no generic advice
            or templates. You will also receive a recording of the session, so
            you can revisit key insights and implement them confidently.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl ml-15 mt-4">
            <div className="bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-8 py-10 flex flex-col h-140 max-w-110 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white hover:border-yellow-500">
              <h3 className="text-(--color-text-dark) text-3xl font-medium mb-10 text-center">
                Personal Consultation
              </h3>

              <ul className="space-y-2 text-(--color-text-dark) text-lg leading-relaxed p-3">
                <li>✓ clear direction</li>
                <li>✓ realistic next steps</li>
                <li>✓ improved understanding of risks and opportunities</li>
                <li>✓ greater confidence in your decisions</li>
              </ul>

              <p className="text-(--color-text-dark) text-4xl font-medium mt-14 mb-10">
                £170
              </p>

              <div className="mt-auto mx-auto">
                <Button title="Book Consultation" link={"/about"} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.12)] px-8 py-10 flex flex-col h-140 max-w-110 transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white hover:border-yellow-500">
              <h3 className="text-(--color-text-dark) text-3xl font-medium mb-8 text-center">
                Free 15-min Call
              </h3>

              <div className="text-(--color-text-dark) text-base leading-relaxed space-y-5 p-3">
                <p>
                  If you have questions about property investment or would like
                  to understand how I can help you, you can start with a free
                  15-minute introductory call.
                </p>

                <div>
                  <p className="mb-2">
                    This is an informal conversation where we can:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>discuss your goals</li>
                    <li>clarify your current situation</li>
                    <li>
                      explain how coaching or consultation could support you
                    </li>
                    <li>answer any initial questions</li>
                  </ul>
                </div>
              </div>

              <div className="mt-auto mx-auto">
                <Button title="Book Free Call" link={"/about"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
