import React from 'react'
import { duke_assets } from '../../assets/case_studies_images/duke_images/duke_assets'
import Navbar from '../../components/ReusableComponents/Navbar'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import Footer from '../../components/ReusableComponents/Footer'
import Header from '../../components/ReusableComponents/Header'

const DukeRoad = () => {
  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Mosspark"
        backgroundImage={duke_assets.livingroom_after}
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
              src: duke_assets.kitchen_after,
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
              src: duke_assets.bedroom_after,
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
              src: duke_assets.bedroom_after2,
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
                src: duke_assets.bedroom_after2,
                alt: "Livingroom after",
              },
              {
                src: duke_assets.livingroom_after,
                alt: "Livingroom after",
              },
            ],
            beforeImages: [
              {
                src: duke_assets.livingroom_before,
                alt: "Livingroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: duke_assets.kitchen_after,
                alt: "Kitchen after",
              },
              {
                src:  duke_assets.bedroom_after2,
                alt: "Kitchen after second view",
              },
            ],
            beforeImages: [
              {
                src:  duke_assets.kitchen_before,
                alt: "Kitchen before",
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

export default DukeRoad