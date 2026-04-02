import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home"
import Consultancy from "./pages/Consultancy";
import About from "./pages/About";
import Mentorship from "./pages/Mentorship";

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
      </Routes>
    </>
  )

}

export default App
