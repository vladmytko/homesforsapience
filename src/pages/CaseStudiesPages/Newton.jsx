import React from 'react'
import { newton_assets } from '../../assets/case_studies_images/newton_images/newton_assets'
import Navbar from '../../components/ReusableComponents/Navbar'
import Header from '../../components/ReusableComponents/Header'
import Footer from '../../components/ReusableComponents/Footer'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'

const Newton = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Newton Avenue"
        backgroundImage={newton_assets.newton_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        sections={[
          {
            title: "Adding Value",
            lines: [
              "One of the key upgrades in this project was the installation of a full gas central heating system.",
              "This involved coordinating with SGN to bring a new gas supply to the property, followed by the installation of a new boiler, radiators throughout the house, and the removal of the existing storage heaters.",
              "One of the more challenging parts of the process was securing an energy supplier willing to install a gas meter sooner than the usual 3–4 month waiting period.",
              "By switching to British Gas, the connection date was brought forward by almost two months, helping to keep the project moving efficiently."
            ],
            image: {
              src: newton_assets.bathroom_after2,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          
          {
            title: "Interior Improvements",
            lines: [
              "To further increase the property’s value and practicality, a downstairs toilet was created by converting a large cupboard space.",
              "The project also included the installation of a completely new bathroom, alongside full plastering and redecoration throughout the property.",
              "These improvements significantly modernised the house and increased its appeal for future tenants."
            ],
            image: {
              src: newton_assets.kitchen_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },

          {
            title: "Refinance & Investment Outcome",
            lines: [
              "Six months after purchase, the property was successfully refinanced and added as another strong cash-flowing unit within the portfolio.",
              "Purchase Price: £120,000",
              "Refurbishment: £18,000",
              "Total Investment: £138,000",
              "Renovated Market Value: £185,000",
              "Monthly Rent: £1,050 pcm"
            ],
            image: {
              src: newton_assets.livingroom_after2,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-right",
          },
        ]}
        beforeAfterGroups={[
          {
            layout: "left-large",
            afterImages: [
              {
                src: newton_assets.livingroom_after2,
                alt: "Kitchen after",
              },
              {
                src: newton_assets.livingroom_after,
                alt: "Kitchen after",
                label: "Before",
              },
            ],
            beforeImages: [
              {
                src: newton_assets.livingroom_before,
                alt: "Kitchen before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: newton_assets.kitchen_after,
                alt: "Kitchen after",
              },
              {
                src: newton_assets.kitchen_after2,
                alt: "Kitchen after",
                label: "Before",
              },
            ],
            beforeImages: [
              {
                src: newton_assets.kitchen_after3,
                alt: "Kitchen before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: newton_assets.bathroom_after2,
                alt: "Bedroom after",
              },
              {
                src: newton_assets.bathroom_after,
                alt: "Livingroom after second view",
              },
            ],
            beforeImages: [
              {
                src: newton_assets.bathroom_before,
                alt: "Livingroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: newton_assets.bedroom1_after,
                alt: "Bedroom after",
              },
              {
                src: newton_assets.bedroom1_after2,
                alt: "Bathroom after",
              },
            ],
            beforeImages: [
              {
                src: newton_assets.bedroom1_before,
                alt: "Bathroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: newton_assets.bedroom2_after2,
                alt: "Bedroom after",
              },
              {
                src: newton_assets.bedroom2_after,
                alt: "Livingroom after second view",
              },
            ],
            beforeImages: [
              {
                src: newton_assets.bedroom2_before,
                alt: "Livingroom before",
                label: "Before",
              },
            ],
          },
        ]}
      />
      <Footer />
    </section>
  )
}

export default Newton