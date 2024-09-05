import React from "react";
import backgroundImg from "../Asset/Background.jpeg";
import WeekendEvent from "../FunCenter/WeekendEvent";
import CardSection from "../FunCenter/CardSection";
import Sponsor from "../FunCenter/Sponsor";
import NewsLetter from "../Home/NewsLetter"
import Footer from "../Home/Footer"

const Funcenter = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center inset-0 z-0 bg-gradient-to-r from-[#D929E5] via-[#D929E5] to-[#3D68FB] opacity-80 relative pt-20"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(217, 41, 229, 0.9) 0%, rgba(61, 104, 251, 0.9) 100%), url(${backgroundImg})`,
        }}
      >
        <div className="max-w-[90%]  mx-auto items-center relative z-10">
          <WeekendEvent />
        </div>
      </section>
      <CardSection />
      <Sponsor />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Funcenter;
