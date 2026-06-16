// src/pages/PrivacyPolicy.jsx

import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import Footer from "../components/ReusableComponents/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-8">
          Privacy Policy
        </h1>

        <p className="mb-6">
          This Privacy Policy explains how Homes For Sapience collects, uses,
          and protects personal information when you use this website, contact
          us, book a consultation, or purchase a paid service.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide
            through the website, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name and surname</li>
            <li>Email address</li>
            <li>Phone number, if provided</li>
            <li>Message or enquiry details</li>
            <li>Consultation booking details</li>
            <li>Information provided through Google Calendar booking forms</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">Your information may be used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to enquiries submitted through the contact form</li>
            <li>Arrange free calls, consultations, and coaching sessions</li>
            <li>Provide information about property services</li>
            <li>Send booking confirmations or follow-up communication</li>
            <li>Process paid services through secure third-party providers</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Contact Form and EmailJS
          </h2>
          <p>
            This website uses EmailJS to send messages submitted through the
            contact form. When you submit the form, the information you provide
            is processed by EmailJS and delivered to us by email so we can
            respond to your enquiry.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Consultation Bookings
          </h2>
          <p>
            When you book a free call, consultation, coaching session, or other
            service, you will be redirected to Google Calendar. You may be asked to provide details such as your
            name, surname, email address, and information relevant to your
            booking.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Payments and Stripe
          </h2>
          <p>
            Some services offered through this website may require payment. Paid
            services are processed securely through Stripe payment links. We do
            not store or process your card details directly on this website.
            Payment information is handled by Stripe according to its own privacy
            and security policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Third-Party Services
          </h2>
          <p className="mb-4">
            This website may use third-party services, including but not limited
            to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>EmailJS for contact form delivery</li>
            <li>Google Calendar for bookings</li>
            <li>Stripe for secure payments</li>
            <li>Email services for communication</li>
          </ul>
          <p className="mt-4">
            These third-party services may process your personal data according
            to their own privacy policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Data Security
          </h2>
          <p>
            We take reasonable steps to protect your personal information.
            However, no method of online transmission or electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of personal
            information we hold about you. You may also request that we stop
            using your information for communication purposes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Contact
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how your data
            is handled, please contact us using the contact details provided on
            this website.
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

export default PrivacyPolicy;