import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home"
import Consultancy from "./pages/Consultancy";
import About from "./pages/About";
import Mentorship from "./pages/Mentorship";
import CaseStudies from "./pages/CaseStudies";
import Drybridge from "./pages/CaseStudiesPages/Drybridge";
import Turnberry from "./pages/CaseStudiesPages/Turnberry";
import Mosspark from "./pages/CaseStudiesPages/Mosspark";
import Huntersfield from "./pages/CaseStudiesPages/Huntersfield";
import DukeRoad from "./pages/CaseStudiesPages/DukeRoad";
import Charles from "./pages/CaseStudiesPages/Charles";
import Paislay from "./pages/CaseStudiesPages/Paislay";
import Netherhill from "./pages/CaseStudiesPages/Netherhill";
import Newton from "./pages/CaseStudiesPages/Newton";
import Testimonials from "./pages/Testimonials";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultation" element={<Consultancy />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/drybridge" element={<Drybridge />} />
        <Route path="/case-studies/turnberry" element={<Turnberry />} />
        <Route path="/case-studies/mosspark" element={<Mosspark />} />
        <Route path="/case-studies/huntersfield" element={<Huntersfield />} />
        <Route path="/case-studies/duke-road" element={<DukeRoad />} />
        <Route path="/case-studies/charles-avenue" element={<Charles />} />
        <Route path="/case-studies/paislay-road" element={<Paislay />} />
        <Route path="/case-studies/netherhill-road" element={<Netherhill />} />
        <Route path="/case-studies/newton" element={<Newton />} />
      </Routes>
    </>
  )

}

export default App
