import React from 'react'
import { huntershield_assets } from '../../assets/case_studies_images/huntersfield/huntersfield_assets';
import Navbar from '../../components/ReusableComponents/Navbar';
import Header from '../../components/ReusableComponents/Header';
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate';
import Footer from '../../components/ReusableComponents/Footer';

const Huntersfield = () => {
return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Huntersfield Road, Johnston"
        backgroundImage={huntershield_assets.kitchen_after1}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        title="A Sweet Turnaround – from Buy-to-Let to Flip"
        intro={[
          "3 bedroom cottage flat in Johnston. Property to be fully renovated: boiler replacement, new kitchen, new bathroom, electricity upgrade etc. This flat was let before refurbishment completed.",
        ]}
        sections={[
          {
            title: "Investment Breakdown",
            lines: [
              "This 3-bedroom cottage flat in Johnstone was purchased with the intention of a full renovation.",
              "- Purchase price: £41,000",
              "- Fees and costs: £2,854",
              "- Refurbishment: £13,450",
              "- Total investment: £57,304",
            ],
            image: {
              src: huntershield_assets.kitchen_after2,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            title: "Post-Refurbishment",
            lines: [
              "The project included a boiler replacement, new kitchen, new bathroom, electrical upgrades, and full redecoration throughout.",
              "- Renovated market value: £56,000",
              "- Total left in deal: £15,304",
              "- Equity created: -£1,304",
            ],
            image: {
              src: huntershield_assets.bedroom1_after,
              alt: "Bedroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            title: "Rental Breakdown",
            lines: [
              "The property attracted strong interest from tenants and was successfully let before the refurbishment work had even been fully completed — highlighting the demand for well-presented rental properties in the area.",
              "- Gross monthly rent: £500",
              "- Net monthly cashflow: £268",
              "- Net annually cashflow: £3,216",
            ],
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
                label: "Before",
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
                label: "Before",
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
                label: "Before",
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