import BackgroundImg from "../Asset/Aboutus-bg.png";
import Services1 from "../Service/Services";
import Unveil from "../Service/Unveil";
import ArtWork from '../Home/ArtCreation'
import Footer from "../Home/Footer"

const Services = () => {
  return (
    <section className="bg-dark xl:pt-10">
      <div className="relative pb-9 xl:pb-16 h-full items-center justify-center rounded-b-[5%] bg-dark2">
        <div className="max-w-[90%] text-center h-[200px] md:h-[400px] flex justify-center mx-auto px-1 xl:pt-6 items-center  pt-24">
          {/* Background Image */}
          <img
            src={BackgroundImg}
            alt="Underline Effect"
            className="absolute  h-auto top-[78%] md:top-[70%] xl:top-[60%] 
            left-1/2 
            transform 
            -translate-x-1/2 
            -translate-y-[70%]  /* Adjust this value to align with the text */
            w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 
            opacity-80" /* Adjust image opacity */
          />

          {/* Text Overlay */}
          <h1 className="relative text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center z-10">
            Our Service
          </h1>
        </div>
      </div>
      <Services1 />
      <Unveil />
      <ArtWork />
      <Footer />
    </section>
  );
};

export default Services;
