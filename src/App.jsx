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
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/drybridge" element={<Drybridge />} />
        <Route path="/case-studies/turnberry" element={<Turnberry />} />
        <Route path="/case-studies/mosspark" element={<Mosspark />} />
        <Route path="/case-studies/huntersfield" element={<Huntersfield />} />
      </Routes>
    </>
  )

}

export default App
