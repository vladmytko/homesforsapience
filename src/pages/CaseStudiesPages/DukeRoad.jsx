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
        title="Dyke Road"
        backgroundImage={duke_assets.livingroom_after}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        sections={[
          {
            title: "Initial Investment Strategy",
            lines: [
              "The property was originally planned as an assisted sale project, where the goal was to refurbish the house and help the owner sell it at full market value.",
              "The refurbishment work was completed quickly, allowing the property to return to the market within just four weeks."
            ],
            image: {
              src: duke_assets.kitchen_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            title: "Challenges During the Sale",
            lines: [
              "Despite multiple viewings and strong interest, the property remained unsold.",
              "The main issue identified was the lack of parking directly in front of the house, which became a concern for potential buyers and affected the sale process."
            ],
            image: {
              src: duke_assets.bedroom_after,
              alt: "Bedroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            title: "Successful Outcome",
            lines: [
              "The property was rented out quickly and added to the investment portfolio at a discounted acquisition price, as refurbishment costs had already been invested into the project.",
              "The property was successfully refinanced at the full market value of £120,000 just two months after purchase and now generates a rental income of £795 per month."
            ],
            image: {
              src: duke_assets.livingroom_after,
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