import React from 'react'
import { duke_assets } from '../../assets/case_studies_images/duke_images/duke_assets'
import Navbar from '../../components/ReusableComponents/Navbar'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import Footer from '../../components/ReusableComponents/Footer'
import Header from '../../components/ReusableComponents/Header'
import { useLanguage } from '../../context/LanguageContext'

const DukeRoad = () => {
  const { t } = useLanguage()
  const content = t.caseStudiesPages.dukeRoad
  const caseStudiesContent = t.caseStudiesPages

  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={duke_assets.livingroom_after}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
        sections={[
          {
            ...content.sections[0],
            image: {
              src: duke_assets.kitchen_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            ...content.sections[1],
            image: {
              src: duke_assets.bedroom_after,
              alt: "Bedroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            ...content.sections[2],
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
                label: caseStudiesContent.beforeLabel,
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
                label: caseStudiesContent.beforeLabel,
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
