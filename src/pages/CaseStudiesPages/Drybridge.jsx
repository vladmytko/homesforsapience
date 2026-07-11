import React from "react";
import CaseStudiesTemplate from "../../components/CaseStudiesComponents/CaseStudiesTemplate";
import { assets_manager } from "../../assets/assets_manager";
import Header from "../../components/ReusableComponents/Header";
import Navbar from "../../components/ReusableComponents/Navbar";
import Footer from "../../components/ReusableComponents/Footer";
import { useLanguage } from "../../context/LanguageContext";

const Drybridge = () => {
  const { t } = useLanguage();
  const content = t.caseStudiesPages.drybridge;
  const caseStudiesContent = t.caseStudiesPages;

  return (
    <section className="overflow-hidden">
    <Navbar />
    <Header
        title={content.title}
        backgroundImage={assets_manager.drybridge_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
    <CaseStudiesTemplate
      beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
      sections={[
        {
          ...content.sections[0],
          image: {
            src: assets_manager.kitchen_after_2,
            alt: "Kitchen after refurbishment",
          },
          layout: "image-right",
        },
        {
          ...content.sections[1],
          image: {
            src: assets_manager.kitchen_after_2,
            alt: "Kitchen after refurbishment",
          },
          layout: "image-left",
        },
        {
          ...content.sections[2],
          image: {
            src: assets_manager.case_studies_hero,
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
              src: assets_manager.kitchen_table,
              alt: "Dining room after",
            },
            { 
              src: assets_manager.living_room_after, 
              alt: "Lounge after" 
            },
          ],
          beforeImages: [
            {
              src: assets_manager.living_room_before,
              alt: "Lounge before",
              label: caseStudiesContent.beforeLabel,
            },
          ],
        },

        {
          layout: "right-large",
          afterImages: [
            {
              src: assets_manager.bathroom_after_2,
              alt: "Bathroom after",
            },
            {
              src: assets_manager.bathroom_after,
              alt: "Bathroom after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.bathroom_before,
              alt: "Bathroom before",
              label: caseStudiesContent.beforeLabel,
            },
          ],
        },

        {
          layout: "left-large",
          afterImages: [
            {
              src: assets_manager.kitchen_after_3,
              alt: "Kitchen after",
            },
            {
              src: assets_manager.kitchen_after,
              alt: "Kitchen after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.kitchen_before,
              alt: "Kitchen before",
              label: caseStudiesContent.beforeLabel,
            },
          ],
        },

        {
          layout: "right-large",
          afterImages: [
            {
              src: assets_manager.stairs_after_2,
              alt: "Stairs after",
            },
            {
              src: assets_manager.stairs_after,
              alt: "Stairs after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.stairs_before,
              alt: "Stairs before",
              label: caseStudiesContent.beforeLabel,
            },
          ],
        },

        {
          layout: "left-large",
          afterImages: [
            {
              src: assets_manager.garden_after,
              alt: "Garden after",
            },
            {
              src: assets_manager.garden_after_2,
              alt: "Garden after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.garden_before,
              alt: "Garden before",
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


export default Drybridge;
