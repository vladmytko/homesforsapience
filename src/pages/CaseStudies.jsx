import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/ReusableComponents/Navbar";
import { assets_manager } from "../assets/assets_manager";
import Header from "../components/ReusableComponents/Header";
import Footer from "../components/ReusableComponents/Footer";

const caseStudiesList = [
  {
    id: 1,
    title: "Drybridge",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.drybridgeImage,
    slug: "drybridge",
  },
  {
    id: 2,
    title: "Turnberry",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.turnberryImage,
    slug: "turnberry",
  },
  {
    id: 3,
    title: "Mosspark",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.mossparkImage,
    slug: "mosspark",
  },
  {
    id: 4,
    title: "Huntersfield",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.huntersfieldImage,
    slug: "huntersfield",
  },
  {
    id: 5,
    title: "Duke Road",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.dykeRoadImage,
    slug: "duke-road",
  },
  {
    id: 6,
    title: "Charles Avenue",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.charlesAvenueImage,
    slug: "charles-avenue",
  },
  {
    id: 7,
    title: "Paislay Road",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.payslayImage,
    slug: "paislay-road",
  },
  {
    id: 8,
    title: "Netherhill Road",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.netherhillImage,
    slug: "netherhill-road",
  },
  {
    id: 9,
    title: "Newton Avenue",
    purchase: "£120k",
    finalValue: "£185k",
    image: assets_manager.newtonImage,
    slug: "newton",
  },
];

const CaseStudies = () => {
  return (
    <section className=" bg-(--color-brand-secondary)">
      <Navbar />
      <Header
        title="Property Investment and Consultancy"
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
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* content */}
                <div className="absolute bottom-0 p-4 sm:p-5 text-white flex flex-col gap-2 sm:gap-3 transition duration-500 ease-out group-hover:-translate-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                    <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm transition duration-500 ease-out group-hover:bg-white/30">
                      Purchase: {item.purchase}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm transition duration-500 ease-out group-hover:bg-white/30">
                      Final Value: {item.finalValue}
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
