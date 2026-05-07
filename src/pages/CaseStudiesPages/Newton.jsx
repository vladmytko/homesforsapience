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
          "To add value, we installed full gas central heating. This involved arranging for SGN to bring the gas supply to the property, followed by boiler installation, fitting new radiators, and removing the existing storage heaters. One of the trickiest parts was finding an energy supplier willing to install a new gas meter sooner than the typical 3–4 month timeframe. In this case, I switched to British Gas, which allowed us to bring the connection date forward by almost two months.",
          "We also created a downstairs toilet by converting a large cupboard, installed a new bathroom, and carried out the usual plastering and redecoration throughout.",
          "Six months after purchase, the property was refinanced, resulting in another strong cash-flowing unit successfully added to the portfolio."
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