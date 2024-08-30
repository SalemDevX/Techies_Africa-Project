import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Header/Home";
import AboutUs from "./components/Header/AboutUs";
import Services from "./components/Header/Services";
import Projects from "./components/Header/Projects";
import Funcenter from "./components/Header/Funcenter";
import ContactUs from "./components/Header/ContactUs";

function App() {
  return (
    <div className=" font-space-grotesk overflow-x-hidden bg-dark text-dark">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/funcenter" element={<Funcenter />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
