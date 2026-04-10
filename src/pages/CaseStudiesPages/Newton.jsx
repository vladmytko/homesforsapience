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
        title="Buy-to-let with capital growth goal
"
        intro={[
          "This was first buy-to-let purchase since the portfolio acquisition in 2022.",
          "The idea behind this project was to acquire an asset in a strong, established area with good schooling and solid long-term capital growth."
        ]}
        sections={[
          {
            title: "Investment Breakdown",
            lines: [
              "Purchase price: Need to update",
              "Fees and costs: Need to update",
              "Refurbishment: Need to update",
              "Total investment: Need to update",
            ],
            image: {
              src: newton_assets.bathroom_after2,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          
          {
            title: "Post-Refurbishment",
            lines: [
              "Renovated market value: £55,000",
              "Mortgage: 75%",
              "Total left in deal: £1,463",
              "Equity created: £12,287",
            ],
            image: {
              src: newton_assets.kitchen_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            title: "Rental Breakdown",
            lines: [
              "Gross monthly rent: £425",
              "Net monthly cashflow: £235",
              "Net annually cashflow: £2,820",
            ],
            image: {
              src: newton_assets.bedroom2_after,
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