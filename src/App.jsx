import { Route, Routes, useLocation } from "react-router-dom"; // Add useLocation
import Navbar from "./components/Header/Navbar";
import Home from "./components/Header/Home";
import AboutUs from "./components/Header/AboutUs";
import Services from "./components/Header/Services";
import Projects from "./components/Header/Projects";
import Funcenter from "./components/Header/Funcenter";
import ContactUs from "./components/Header/ContactUs";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 100 }, // Start offscreen at the bottom
    in: { opacity: 1, y: 0 }, // Move in
    out: { opacity: 0, y: -100 }, // Move out upwards
  };
  const pageVariants1 = {
  initial: { opacity: 0, y: -100 }, // Start offscreen at the bottom
    in: { opacity: 1, y: 0 }, // Move in
    out: { opacity: 0, y: 100 }, // Move out upwards
  };

  const pageVariants2 = {
    initial: { opacity: 0, x: -100 }, // Start offscreen at the bottom
    in: { opacity: 1, x: 0 }, // Move in
    out: { opacity: 0, x: 100 }, // Move out upwards
  };
  const pageVariants3 = {
    initial: { opacity: 0, x: 100 }, // Start offscreen at the bottom
    in: { opacity: 1, x: 0 }, // Move in
    out: { opacity: 0, x: -100 }, // Move out upwards
  };

 
  
  const pageTransition = {
    duration: 0.5, // Control the speed of the animation
  };

  return (
    <div className=" font-space-grotesk overflow-x-hidden bg-dark text-dark">
     <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants1}
                transition={pageTransition}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/aboutus"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants2}
                transition={pageTransition}
              >
                <AboutUs />
              </motion.div>
            }
          />
          <Route
            path="/services"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants3}
                transition={pageTransition}
              >
                <Services />
              </motion.div>
            }
          />
          <Route
            path="/projects"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants2}
                transition={pageTransition}
              >
                <Projects />
              </motion.div>
            }
          />
          <Route
            path="/funcenter"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Funcenter />
              </motion.div>
            }
          />
          <Route
            path="/contactus"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants3}
                transition={pageTransition}
              >
                <ContactUs />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
      <Navbar />
    </div>
  );
}

export default App;
