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
      title="A Sweet Turnaround – from Buy-to-Let to Flip"
      intro={[
        "This tenanted house was purchased in 2022 as part of a larger portfolio. When the numbers didn’t stack up for a traditional buy-to-let, we decided to go for a flip instead.",
        "To add value, we removed a wall to create a bright and modern open-plan kitchen. A small cupboard next to the bathroom was turned into a compact shower cubicle to make better use of the space.",
        "We also added a new driveway to boost curb appeal—and as a bonus, enjoyed a great harvest from the apple tree in the garden before the property was sold!",
      ]}
      sections={[
        {
          title: "Investment Breakdown",
          lines: [
            "Purchase price: £57,500",
            "Fees and costs: £8,300",
            "Refurbishment: £6,672",
            "Total investment: £67,972",
          ],
          image: {
            src: assets_manager.kitchen_after_2,
            alt: "Kitchen after refurbishment",
          },
          layout: "image-right",
        },
        {
          title: "Post-Refurbishment",
          lines: [
            "Renovated market value: £80,000",
            "Mortgage (75% LTV): £60,000",
            "Equity created: £12,028",
          ],
          image: {
            src: assets_manager.case_studies_hero,
            alt: "Bedroom after refurbishment",
          },
          layout: "image-left",
        },
        {
          title: "Rental Breakdown",
          lines: [
            "Gross monthly rent: £525",
            "Net monthly cashflow: £304",
            "Net annually cashflow: £3,645",
          ],
          image: {
            src: assets_manager.bathroom_after_2,
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
