// src/pages/TermsAndConditions.jsx

import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import Footer from "../components/ReusableComponents/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-8">
          Terms & Conditions
        </h1>

        <p className="mb-6">
          These Terms & Conditions govern your use of this website and any
          services provided by Homes For Sapience.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Acceptance of Terms
          </h2>
          <p>
            By using this website, booking a consultation, purchasing a service,
            or accessing any content provided through this website, you agree to
            be bound by these Terms & Conditions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Services Provided
          </h2>
          <p className="mb-4">
            Services may include:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Property consultations</li>
            <li>Property investment coaching</li>
            <li>Property buying support</li>
            <li>Educational webinars</li>
            <li>Digital resources and presentations</li>
            <li>General property investment guidance</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            No Financial Advice
          </h2>
          <p>
            All information provided through this website, consultations,
            coaching sessions, webinars, presentations, emails, and other
            communications is for educational and informational purposes only.
          </p>

          <p className="mt-4">
            Nothing provided by Homes For Sapience constitutes financial,
            investment, legal, tax, mortgage, or regulated financial advice.
          </p>

          <p className="mt-4">
            Any investment decision remains entirely your responsibility. You
            should seek independent professional advice before making investment
            or financial decisions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Consultations and Coaching
          </h2>
          <p>
            Consultations and coaching sessions are intended to provide general
            guidance, education, and personal experience relating to property
            investment and property-related strategies.
          </p>

          <p className="mt-4">
            Results achieved by other clients or examples shown on this website
            do not guarantee similar outcomes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Booking and Appointments
          </h2>

          <p>
            Appointments may be scheduled through Google Calendar or a similar
            booking platform.
          </p>

          <p className="mt-4">
            Clients are responsible for providing accurate booking information,
            including name, email address, and any information necessary to
            deliver the service.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Payments
          </h2>

          <p>
            Certain services require payment before access is granted.
          </p>

          <p className="mt-4">
            Payments are processed securely through Stripe. Homes For Sapience
            does not store or process payment card details directly.
          </p>

          <p className="mt-4">
            By making a payment, you confirm that you are authorised to use the
            selected payment method.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Refunds
          </h2>

          <p>
            Unless otherwise stated for a specific service, consultation fees,
            coaching fees, webinar registrations, and digital products are
            non-refundable once the service has been delivered or access has
            been granted.
          </p>

          <p className="mt-4">
            Requests for refunds may be considered at our sole discretion.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Cancellations and Rescheduling
          </h2>

          <p>
            Clients may request to reschedule an appointment with reasonable
            notice.
          </p>

          <p className="mt-4">
            Failure to attend a scheduled session without prior notice may
            result in the session being forfeited.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Intellectual Property
          </h2>

          <p>
            All content on this website, including text, graphics, educational
            materials, presentations, videos, and downloadable resources,
            remains the property of Homes For Sapience unless otherwise stated.
          </p>

          <p className="mt-4">
            Content may not be copied, distributed, reproduced, or sold without
            prior written permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Limitation of Liability
          </h2>

          <p>
            Homes For Sapience shall not be liable for any direct, indirect,
            incidental, consequential, or financial loss arising from reliance
            upon information provided through this website or related services.
          </p>

          <p className="mt-4">
            Users accept full responsibility for any decisions made based on
            information obtained from this website or through consultations,
            coaching, webinars, or educational content.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to These Terms
          </h2>

          <p>
            We reserve the right to update these Terms & Conditions at any time.
            Updated versions will be published on this page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>

          <p>
            If you have any questions regarding these Terms & Conditions, please
            contact us through the details provided on this website.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Last updated: Jan 2026
        </p>
      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditions;