import React from 'react'
import Navbar from '../../components/ReusableComponents/Navbar'
import Header from '../../components/ReusableComponents/Header'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import Footer from '../../components/ReusableComponents/Footer'
import { charles_assets } from '../../assets/case_studies_images/charles_images/charles_assets'
import { useLanguage } from '../../context/LanguageContext'

const Charles = () => {
  const { t } = useLanguage()
  const content = t.caseStudiesPages.charles
  const caseStudiesContent = t.caseStudiesPages

  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={charles_assets.kitchen_after2}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        title={content.templateTitle}
        beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
        sections={[
          {
            ...content.sections[0],
            image: {
              src: charles_assets.kitchen_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            ...content.sections[1],
            image: {
              src: charles_assets.livingroom_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            ...content.sections[2],
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
                label: caseStudiesContent.beforeLabel,
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
                label: caseStudiesContent.beforeLabel,
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

export default Charles
