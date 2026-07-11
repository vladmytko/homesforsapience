import React from "react";
import Navbar from "../../components/ReusableComponents/Navbar";
import Header from "../../components/ReusableComponents/Header";
import CaseStudiesTemplate from "../../components/CaseStudiesComponents/CaseStudiesTemplate";
import Footer from "../../components/ReusableComponents/Footer";
import { paislay_assets } from "../../assets/case_studies_images/paislay_images/paislay_assets";
import { useLanguage } from "../../context/LanguageContext";

const Paislay = () => {
  const { t } = useLanguage();
  const content = t.caseStudiesPages.paisley;
  const caseStudiesContent = t.caseStudiesPages;

  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={paislay_assets.kitchen_after}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
        sections={[
          {
            ...content.sections[0],
            image: {
              src: paislay_assets.bedroom_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            ...content.sections[1],
            image: {
              src: paislay_assets.livingroom_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            ...content.sections[2],
            image: {
              src: paislay_assets.bathroom_after,
              alt: "Bedroom after refurbishment",
            },
            layout: "image-right",
          },
        ]}
        beforeAfterGroups={[
          {
            layout: "left-large",
            afterImages: [
              {
                src: paislay_assets.kitchen_after,
                alt: "Kitchen after",
              },
              {
                src: paislay_assets.kitchen_before2,
                alt: "Kitchen after",
                label: caseStudiesContent.beforeLabel,
              },
            ],
            beforeImages: [
              {
                src: paislay_assets.kitchen_before,
                alt: "Kitchen before",
                label: caseStudiesContent.beforeLabel,
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: paislay_assets.livingroom_after,
                alt: "Bedroom after",
              },
              {
                src: paislay_assets.bedroom_after,
                alt: "Livingroom after second view",
              },
            ],
            beforeImages: [
              {
                src: paislay_assets.bedroom_before,
                alt: "Livingroom before",
                label: caseStudiesContent.beforeLabel,
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: paislay_assets.bedroom_after,
                alt: "Bedroom after",
              },
              {
                src: paislay_assets.livingroom_before,
                alt: "Bathroom after",
                label: caseStudiesContent.beforeLabel
              },
            ],
            beforeImages: [
              {
                src: paislay_assets.bathroom_before,
                alt: "Bathroom before",
                label: caseStudiesContent.beforeLabel,
              },
            ],
          },
        ]}
      />
      <Footer />
    </section>
  );
};

export default Paislay;
