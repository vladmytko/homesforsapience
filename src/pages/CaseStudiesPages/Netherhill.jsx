import React from 'react'
import Navbar from '../../components/ReusableComponents/Navbar'
import Header from '../../components/ReusableComponents/Header'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import Footer from '../../components/ReusableComponents/Footer'
import { netherhill_assets } from '../../assets/case_studies_images/netherhill/netherhill_assets'

const Netherhill = () => {
  return (
     <section className="overflow-hidden">
      <Navbar />
      <Header
        title="Netherhill Road"
        backgroundImage={netherhill_assets.kitchen_after}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        title="Buy to ley property"
        intro={[
          "This 2 bedroom ground floor flat located in Paisley Gallowhill. It is in really poor condition with some damp issues, boiler requiring replacement and general lack of care.",
          "Refurbishment completed in September 2017. Tenanted from October 2017."
        ]}
        sections={[
          {
            title: "Investment Breakdown",
            lines: [
              "Purchase price: £32,000",
              "Fees and costs: £1,394",
              "Refurbishment: £9,319",
              "Total investment: £42,713",
            ],
            image: {
              src: netherhill_assets.coridor_after,
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
              src: netherhill_assets.livingroom_after,
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
              src: netherhill_assets.kitchen_after,
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
                src: netherhill_assets.kitchen_after,
                alt: "Kitchen after",
              },
              {
                src: netherhill_assets.kitchen_before2,
                alt: "Kitchen after",
                label: "Before",
              },
            ],
            beforeImages: [
              {
                src: netherhill_assets.kitchen_before,
                alt: "Kitchen before",
                label: "Before",
              },
            ],
          },

          {
            layout: "right-large",
            afterImages: [
              {
                src: netherhill_assets.livingroom_after2,
                alt: "Bedroom after",
              },
              {
                src: netherhill_assets.livingroom_after,
                alt: "Livingroom after second view",
              },
            ],
            beforeImages: [
              {
                src: netherhill_assets.livingroom_before,
                alt: "Livingroom before",
                label: "Before",
              },
            ],
          },

          {
            layout: "left-large",
            afterImages: [
              {
                src: netherhill_assets.coridor_after2,
                alt: "Bedroom after",
              },
              {
                src: netherhill_assets.coridor_after,
                alt: "Bathroom after",
              },
            ],
            beforeImages: [
              {
                src: netherhill_assets.coridor_before,
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

export default Netherhill