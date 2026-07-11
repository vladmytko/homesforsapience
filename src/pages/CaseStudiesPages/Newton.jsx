import React from 'react'
import { newton_assets } from '../../assets/case_studies_images/newton_images/newton_assets'
import Navbar from '../../components/ReusableComponents/Navbar'
import Header from '../../components/ReusableComponents/Header'
import Footer from '../../components/ReusableComponents/Footer'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import { useLanguage } from '../../context/LanguageContext'

const Newton = () => {
  const { t } = useLanguage()
  const content = t.caseStudiesPages.newton
  const caseStudiesContent = t.caseStudiesPages

  return (
    <section className="overflow-hidden">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={newton_assets.newton_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
        sections={[
          {
            ...content.sections[0],
            image: {
              src: newton_assets.bathroom_after2,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          
          {
            ...content.sections[1],
            image: {
              src: newton_assets.kitchen_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },

          {
            ...content.sections[2],
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
                label: caseStudiesContent.beforeLabel,
              },
            ],
            beforeImages: [
              {
                src: newton_assets.livingroom_before,
                alt: "Kitchen before",
                label: caseStudiesContent.beforeLabel,
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
                label: caseStudiesContent.beforeLabel,
              },
            ],
            beforeImages: [
              {
                src: newton_assets.kitchen_after3,
                alt: "Kitchen before",
                label: caseStudiesContent.beforeLabel,
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
                label: caseStudiesContent.beforeLabel,
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
                label: caseStudiesContent.beforeLabel,
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

export default Newton
