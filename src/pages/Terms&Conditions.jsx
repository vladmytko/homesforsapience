// src/pages/TermsAndConditions.jsx

import React from "react";
import Navbar from "../components/ReusableComponents/Navbar";
import Footer from "../components/ReusableComponents/Footer";
import { useLanguage } from "../context/LanguageContext";

const TermsAndConditions = () => {
  const { t } = useLanguage();
  const content = t.termsPage;

  return (
    <>
      <Navbar />

      <main className="px-6 py-20 max-w-5xl mx-auto text-gray-800">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-8">
          {content.title}
        </h1>

        <p className="mb-6">
          {content.intro}
        </p>

        {content.sections.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 && section.list ? "mb-4" : index === 0 ? "" : "mt-4"}>
                {paragraph}
              </p>
            ))}
            {section.list ? (
              <ul className="list-disc pl-6 space-y-2">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <p className="text-sm text-gray-500">
          {content.lastUpdated}
        </p>
      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
