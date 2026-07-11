import React from 'react'
import Navbar from '../../components/ReusableComponents/Navbar'
import Header from '../../components/ReusableComponents/Header'
import CaseStudiesTemplate from '../../components/CaseStudiesComponents/CaseStudiesTemplate'
import Footer from '../../components/ReusableComponents/Footer'
import { netherhill_assets } from '../../assets/case_studies_images/netherhill/netherhill_assets'
import { useLanguage } from '../../context/LanguageContext'

const Netherhill = () => {
  const { t } = useLanguage()
  const content = t.caseStudiesPages.netherhill
  const caseStudiesContent = t.caseStudiesPages

  return (
     <section className="overflow-hidden">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={netherhill_assets.kitchen_after}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <CaseStudiesTemplate
        beforeAfterTitle={caseStudiesContent.beforeAfterTitle}
        sections={[
          {
            ...content.sections[0],
            image: {
              src: netherhill_assets.coridor_after,
              alt: "Kitchen after refurbishment",
            },
            layout: "image-right",
          },
          {
            ...content.sections[1],
            image: {
              src: netherhill_assets.livingroom_after,
              alt: "Livingroom after refurbishment",
            },
            layout: "image-left",
          },
          {
            ...content.sections[2],
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
                label: caseStudiesContent.beforeLabel,
              },
            ],
            beforeImages: [
              {
                src: netherhill_assets.kitchen_before,
                alt: "Kitchen before",
                label: caseStudiesContent.beforeLabel,
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
                label: caseStudiesContent.beforeLabel,
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

export default Netherhill
