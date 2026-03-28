import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Consultancy from "./pages/Consultancy";
import About from "./pages/About";
import Mentorship from "./pages/Mentorship";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/consultation" element={<Consultancy/ >} />
      <Route path="/mentorship" element={<Mentorship />} />
    </Routes>
  )

}

export default App
