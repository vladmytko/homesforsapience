import React from "react";
import CaseStudiesTemplate from "../../components/CaseStudiesComponents/CaseStudiesTemplate";
import { assets_manager } from "../../assets/assets_manager";
import Header from "../../components/ReusableComponents/Header";
import Navbar from "../../components/ReusableComponents/Navbar";
import Footer from "../../components/ReusableComponents/Footer";

const Drybridge = () => {
  return (
    <section className="overflow-hidden">
    <Navbar />
    <Header
        title="Drybridge Road"
        backgroundImage={assets_manager.drybridge_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
    <CaseStudiesTemplate
      sections={[
        {
          title: "Investment Strategy",
          lines: [
            "This tenanted property was purchased in 2022 as part of a larger portfolio acquisition. After reviewing the numbers, it became clear that the property was not suitable for a traditional buy-to-let strategy, so the decision was made to reposition the project as a flip instead.",
            "- Purchase price: £100,500",
            "- Fees and costs: £13,600",
          ],
          image: {
            src: assets_manager.kitchen_after_2,
            alt: "Kitchen after refurbishment",
          },
          layout: "image-right",
        },
        {
          title: "Creating Value",
          lines: [
            "To maximise the property’s value and improve the layout, a wall was removed to create a bright and modern open-plan kitchen space. A small cupboard next to the bathroom was also converted into a compact shower cubicle, making much better use of the available space and improving functionality. Aslo new driveway. ",
            
            "- Refurbishment: £40,000",
            "- Total investment: £154,100",
          ],
          image: {
            src: assets_manager.kitchen_after_2,
            alt: "Kitchen after refurbishment",
          },
          layout: "image-left",
        },
        {
          title: "Final Outcome",
          lines: [
            "the property was successfully prepared for resale as a more modern and desirable home. As a memorable bonus during the project, the apple tree in the garden provided an unexpectedly great harvest before the property was sold.",
            "- Staging: £2,000",
            "- Cost of money: £4,500",
            "- Home Report: £195,000",
            "- Sold for: £205,000"
          ],
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
              label: "Before",
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
              label: "Before",
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
              label: "Before",
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
              label: "Before",
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


export default Drybridge;
