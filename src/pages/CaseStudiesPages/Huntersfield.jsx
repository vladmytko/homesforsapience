import React from 'react'
import { huntershield_assets } from '../../assets/case_studies_images/huntersfield/huntersfield_assets';
import Navbar from '../../components/ReusableComponents/Navbar';
import Header from '../../components/ReusableComponents/Header';
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate';
import Footer from '../../components/ReusableComponents/Footer';
import { useLanguage } from '../../context/LanguageContext';

const Huntersfield = () => {
const { t } = useLanguage();
const content = t.caseStudiesPages.huntersfield;
const caseStudiesContent = t.caseStudiesPages;

return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={huntershield_assets.kitchen_after1}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        title={content.templateTitle}
        intro={content.intro}
        beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
        sections={[
          {
            ...content.sections[0],
            image: {
              src: huntershield_assets.kitchen_after2,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            ...content.sections[1],
            image: {
              src: huntershield_assets.bedroom1_after,
              alt: "Bedroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            ...content.sections[2],
            image: {
              src: huntershield_assets.lounge_after,
              alt: "Bathroom after refurbishment",
            },
            layout: "image-right",
          },
        ]}
        beforeAfterGroups={[
          {
            layout: "left-large",
            afterImages: [
              {
                src: huntershield_assets.kitchen_after1,
                alt: "Kitchen after",
              },
              {
                src: huntershield_assets.kitchen_after2,
                alt: "Kitchen after",
              },
            ],
            beforeImages: [
              {
                src: huntershield_assets.kitchen_before2,
                alt: "Kitchen before",
                label: caseStudiesContent.beforeLabel,
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: huntershield_assets.bedroom1_after,
                alt: "Bedroom after",
              },
              {
                src: huntershield_assets.bedroom3_after,
                alt: "Bedroom after second view",
              },
            ],
            beforeImages: [
              {
                src: huntershield_assets.bedroom3_before,
                alt: "Bedroom before",
                label: caseStudiesContent.beforeLabel,
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: huntershield_assets.lounge_after,
                alt: "Bathroom after",
              },
              {
                src: huntershield_assets.bathroom_after,
                alt: "Bathroom after second view",
              },
            ],
            beforeImages: [
              {
                src: huntershield_assets.lournge_before,
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
}

export default Huntersfield
