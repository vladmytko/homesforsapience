import React from "react";
import Navbar from "../../components/ReusableComponents/Navbar";
import Header from "../../components/ReusableComponents/Header";
import CaseStudiesTemplate from "../../components/CaseStudiesComponents/CaseStudiesTemplate";
import Footer from "../../components/ReusableComponents/Footer";
import { paislay_assets } from "../../assets/case_studies_images/paislay_images/paislay_assets";

const Paislay = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Paislay Road"
        backgroundImage={paislay_assets.kitchen_after}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        title="Buy to ley property"
        intro={[
          "Property was bought in heavily distressed condition it stays on market more than a year.",
          "This 2 bedroom flat was refurbished throughout including installation of a new gas central heating, new carpets and brand new kitchen. Currently let for a long term."
        ]}
        sections={[
          {
            title: "Investment Breakdown",
            lines: [
              "Purchase price: £33,500",
              "Fees and costs: £2,468",
              "Refurbishment: £9,304",
              "Total investment: £45,272",
            ],
            image: {
              src: paislay_assets.bedroom_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            title: "Post-Refurbishment",
            lines: [
              "Renovated market value: £55,000",
              "Mortgage: 75%",
              "Total left in deal: £4,022",
              "Equity created: £9,728",
            ],
            image: {
              src: paislay_assets.livingroom_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            title: "Rental Breakdown",
            lines: [
              "Gross monthly rent: £425",
              "Net monthly cashflow: £226",
              "Net annually cashflow: £2,712",
            ],
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
                label: "Before",
              },
            ],
            beforeImages: [
              {
                src: paislay_assets.kitchen_before,
                alt: "Kitchen before",
                label: "Before",
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
                label: "Before",
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
                label: "Before"
              },
            ],
            beforeImages: [
              {
                src: paislay_assets.bathroom_before,
                alt: "Bathroom before",
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

export default Paislay;
