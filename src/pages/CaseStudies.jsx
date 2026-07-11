import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Header from "../components/ReusableComponents/Header";
import Footer from "../components/ReusableComponents/Footer";
import { useLanguage } from "../context/LanguageContext";

const caseStudiesList = [
  {
    id: 1,
    titleKey: "drybridge",
    purchase: "£100,500",
    finalValue: "£205,000",
    image: assets_manager.drybridgeImage,
    slug: "drybridge",
  },
  {
    id: 2,
    titleKey: "turnberry",
    purchase: "£35,000",
    finalValue: "£60,000",
    image: assets_manager.turnberryImage,
    slug: "turnberry",
  },
  {
    id: 3,
    titleKey: "mosspark",
    purchase: "£130,000",
    finalValue: "£227,000",
    image: assets_manager.mossparkImage,
    slug: "mosspark",
  },
  {
    id: 4,
    titleKey: "huntersfield",
    purchase: "£41,000",
    finalValue: "£70,000",
    image: assets_manager.huntersfieldImage,
    slug: "huntersfield",
  },
  {
    id: 5,
    titleKey: "dykeRoad",
    purchase: "£60,000",
    finalValue: "£120,000",
    image: assets_manager.dykeRoadImage,
    slug: "dyke-road",
  },
  {
    id: 6,
    titleKey: "charlesAvenue",
    purchase: "£39,000",
    finalValue: "£58,000",
    image: assets_manager.charlesAvenueImage,
    slug: "charles-avenue",
  },
  {
    id: 7,
    titleKey: "paisleyRoad",
    purchase: "£33,500",
    finalValue: "£55,000",
    image: assets_manager.payslayImage,
    slug: "paisley-road",
  },
  {
    id: 8,
    titleKey: "netherhillRoad",
    purchase: "£32,000",
    finalValue: "£55,000",
    image: assets_manager.netherhillImage,
    slug: "netherhill-road",
  },
  {
    id: 9,
    titleKey: "newtonAvenue",
    purchase: "£120,000",
    finalValue: "£185,000",
    image: assets_manager.newtonImage,
    slug: "newton",
  },
];

const CaseStudies = () => {
  const { t } = useLanguage();
  const content = t.caseStudiesIndexPage;

  return (
    <section className=" bg-(--color-brand-secondary)">
      <Navbar />
      <Header
        title={content.title}
        backgroundImage={assets_manager.case_studies_hero}
        showConsultationButton={true}
        showAboutButton={true}
      />
      <div className="max-w-7xl mx-auto px-6  py-10 container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-20 gap-x-6 gap-y-10">
          {caseStudiesList.map((item) => (
            <Link
              key={item.id}
              to={`/case-studies/${item.slug}`}
              className="group bg-transparent flex flex-col w-full justify-self-center transform-gpu transition duration-500 ease-out hover:scale-[1.02]"
            >
              <div className="relative w-full h-64 sm:min-h-90 rounded-xl overflow-hidden shadow-xl transition duration-500 ease-out group-hover:shadow-2xl">
                <img
                  src={item.image}
                  alt={content.items[item.titleKey]}
                  className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* content */}
                <div className="absolute bottom-0 p-4 sm:p-5 text-white flex flex-col gap-2 sm:gap-3 transition duration-500 ease-out group-hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    {content.items[item.titleKey]}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                    <span className="bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm transition duration-500 ease-out group-hover:bg-white/30">
                      {content.purchaseLabel}: {item.purchase}
                    </span>
                    <span className="bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm transition duration-500 ease-out group-hover:bg-white/30">
                      {content.finalValueLabel}: {item.finalValue}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CaseStudies;
