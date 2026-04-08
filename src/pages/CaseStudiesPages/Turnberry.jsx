import React from "react";
import Navbar from "../../components/ReusableComponents/Navbar";
import Header from "../../components/ReusableComponents/Header";
import { assets_manager } from "../../assets/assets_manager";
import CaseStudiesTemplate from "../../components/CaseStudiesComponents/CaseStudiesTemplate";
import Footer from "../../components/ReusableComponents/Footer";

const Turnberry = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Turnberry Road"
        backgroundImage={assets_manager.turnberry_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
      title="Two bedroom cottage flat"
      intro={[
        "This 2 bedroom upper cottage flat was bought in distressed condition. This property gone through total redecoration with new kitchen, bathroom, landscaping.",
        "It takes 2 months to complete refurbishment and dress this property for sale. This flat was sold within 6 days on the market. Thanks our team of investors and builders who make it possible!",
      ]}
      beforeAfterGroups={[
        
        {
          layout: "left-large",
          afterImages: [
            {
              src: assets_manager.turnberry_livingroom_after_3,
              alt: "Dining room after",
            },
            { 
              src: assets_manager.turnberry_livingroom_after, 
              alt: "Lounge after" 
            },
          ],
          beforeImages: [
            {
              src: assets_manager.turnberry_livingroom_before,
              alt: "Lounge before",
              label: "Before",
            },
          ],
        },

        {
          layout: "right-large",
          afterImages: [
            {
              src: assets_manager.turnberry_kitchen_after_2,
              alt: "Kitchen after",
            },
            {
              src: assets_manager.turnberry_kitchen_after,
              alt: "Kitchen after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.turnberry_kitchen_before,
              alt: "Kitchen before",
              label: "Before",
            },
          ],
        },

        {
          layout: "left-large",
          afterImages: [
            {
              src: assets_manager.turnberry_bathroom_after,
              alt: "Bathroom after",
            },
            {
              src: assets_manager.turnberry_bathroom_after_2,
              alt: "Bathroom after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.turnberry_bathroom_before,
              alt: "Bathroom before",
              label: "Before",
            },
          ],
        },

        {
          layout: "right-large",
          afterImages: [
            {
              src: assets_manager.turnberry_bedroom_after,
              alt: "Bedroom after",
            },
            {
              src: assets_manager.turnberry_bedroom_after_2,
              alt: "Bedroom after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.turnberry_bedroom_before,
              alt: "Bedroom before",
              label: "Before",
            },
          ],
        },

        {
          layout: "left-large",
          afterImages: [
            {
              src: assets_manager.turnberry_driveway_after,
              alt: "Garden after",
            },
            {
              src: assets_manager.turnberry_garden_after,
              alt: "Garden after second view",
            },
          ],
          beforeImages: [
            {
              src: assets_manager.turnberry_garden_before,
              alt: "Garden before",
              label: "Before",
            },
          ],
        },

      ]}
    />
    <Footer />
    </section>
  );
};

export default Turnberry;
