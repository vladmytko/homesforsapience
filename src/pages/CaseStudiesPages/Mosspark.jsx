import React from "react";
import Navbar from "../../components/ReusableComponents/Navbar";
import Header from "../../components/ReusableComponents/Header";
import CaseStudiesTemplate from "../../components/CaseStudiesComponents/CaseStudiesTemplate";
import Footer from "../../components/ReusableComponents/Footer";
import { mosspark_assets } from "../../assets/case_studies_images/mosspark_images/mosspark_assets";

const Mosspark = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Mosspark"
        backgroundImage={mosspark_assets.mosspark_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        // title="A Sweet Turnaround – from Buy-to-Let to Flip"
        // intro={[
        //   "This tenanted house was purchased in 2022 as part of a larger portfolio. When the numbers didn’t stack up for a traditional buy-to-let, we decided to go for a flip instead.",
        //   "To add value, we removed a wall to create a bright and modern open-plan kitchen. A small cupboard next to the bathroom was turned into a compact shower cubicle to make better use of the space.",
        //   "We also added a new driveway to boost curb appeal—and as a bonus, enjoyed a great harvest from the apple tree in the garden before the property was sold!",
        // ]}
        sections={[
          {
            title: "Investment Strategy",
            lines: [
              "This tenanted property was purchased in 2022 as part of a larger portfolio. When the numbers didn’t work for a traditional buy-to-let, the strategy was changed to a flip instead.",
              "- Purchase price: £130,000",
              "- Refurbishment: £34,100",
              
            ],
            image: {
              src: mosspark_assets.mosspark_bedroom1_2,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            title: "Creating Value",
            lines: [
              "A wall was removed to create a bright open-plan kitchen, while a small cupboard next to the bathroom was converted into a compact shower cubicle to improve the layout.",
              "A new driveway was also added to boost curb appeal before the property was sold.",
              "- Total investment: £164,100",
              "Sold for: £227,000",
            ],
            image: {
              src: mosspark_assets.mosspark_kitchen_2,
              alt: "Bedroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            title: "Creating Value",
            lines: [
              "Following the refurbishment, the property was successfully prepared for resale as a more modern and desirable home — with the added bonus of a great apple harvest from the garden before completion.",
              "- Sold for: £227,000",
            ],
            image: {
              src: mosspark_assets.mosspark_kitchen_2,
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
                src: mosspark_assets.mosspark_livingroom_after,
                alt: "Livingroom after",
              },
              {
                src: mosspark_assets.mosspark_livingroom2,
                alt: "Livingroom after",
              },
            ],
            beforeImages: [
              {
                src: mosspark_assets.mosspark_livingroom_before,
                alt: "Livingroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: mosspark_assets.mosspark_kitchen_2,
                alt: "Kitchen after",
              },
              {
                src: mosspark_assets.mosspark_kitchen_3,
                alt: "Kitchen after second view",
              },
            ],
            beforeImages: [
              {
                src: mosspark_assets.mosspark_kitchen_before,
                alt: "Kitchen before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: mosspark_assets.mosspark_bathroom_after,
                alt: "Bathroom after",
              },
              {
                src: mosspark_assets.mosspark_bathroom2,
                alt: "Bathroom after second view",
              },
            ],
            beforeImages: [
              {
                src: mosspark_assets.mosspark_bathroom_before,
                alt: "Bathroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: mosspark_assets.mosspark_bedroom1,
                alt: "Bedroom1 after",
              },
              {
                src: mosspark_assets.mosspark_bedroom1_2,
                alt: "Bedroom1 after second view",
              },
            ],
            beforeImages: [
              {
                src: mosspark_assets.mosspark_bedroom_before,
                alt: "Bedroom1 before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: mosspark_assets.mosspark_bedroom2_2,
                alt: "Bedroom2 after",
              },
              {
                src: mosspark_assets.mosspark_bedroom2,
                alt: "Bedroom2 after second view",
              },
            ],
            beforeImages: [
              {
                src: mosspark_assets.mosspark_bedroom_before2,
                alt: "Bedroom2 before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: mosspark_assets.mosspark_smallbed,
                alt: "Bedroom3 after",
              },
              {
                src: mosspark_assets.mosspark_garden,
                alt: "Bedroom3 after second view",
              },
            ],
            beforeImages: [
              {
                src: mosspark_assets.mosspark_smallbed_before,
                alt: "Bedroom3 before",
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

export default Mosspark;
