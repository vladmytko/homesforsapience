import React from 'react'
import Navbar from '../../components/ReusableComponents/Navbar'
import Header from '../../components/ReusableComponents/Header'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import Footer from '../../components/ReusableComponents/Footer'
import { charles_assets } from '../../assets/case_studies_images/charles_images/charles_assets'

const Charles = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Charles Avenue"
        backgroundImage={charles_assets.kitchen_after2}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        title="2 bedroom ground floor flat located in Renfrew town centre."
        sections={[
          {
            title: "Investment Breakdown",
            lines: [
              "Purchase price: £39,000",
              "Fees and costs: £2,180",
              "Refurbishment: £8,460",
              "Total investment: £49,640",
            ],
            image: {
              src: charles_assets.kitchen_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            title: "Post-Refurbishment",
            lines: [
              "Renovated market value: £58,000",
              "Mortgage: 75%",
              "Equity created: £8,360",
            ],
            image: {
              src: charles_assets.livingroom_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            title: "Rental Breakdown",
            lines: [
              "Gross monthly rent: £450",
              "Net monthly cashflow: £246",
              "Net annually cashflow: £2,952",
            ],
            image: {
              src: charles_assets.bedroom_after2,
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
                src: charles_assets.kitchen_after2,
                alt: "Kitchen after",
              },
              {
                src: charles_assets.kitchen_after,
                alt: "Kitchen after",
              },
            ],
            beforeImages: [
              {
                src: charles_assets.kitchen_before,
                alt: "Kitchen before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: charles_assets.bedroom_after,
                alt: "Bedroom after",
              },
              {
                src:  charles_assets.livingroom_after,
                alt: "Livingroom after second view",
              },
            ],
            beforeImages: [
              {
                src:  charles_assets.livingroom_before,
                alt: "Livingroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: charles_assets.bedroom_after2,
                alt: "Bedroom after",
              },
              {
                src: charles_assets.bathroom_after,
                alt: "Bathroom after",
              },
            ],
            beforeImages: [
              {
                src: charles_assets.bathroom_before,
                alt: "Bathroom before",
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

export default Charles