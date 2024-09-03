import Button from "../Button";
import BackgroundImg from "../Asset/Hero/Map.png";
import BrandsImg1 from "../Asset/Hero/Brand1.png";
import BrandsImg2 from "../Asset/Hero/Brand2.png";
import Idea from "../Home/Idea";
import Unveiling from "../Home/Unveiling";
import OurServices from "../Home/OurServices";
import WeekendEvent from "../Home/WeekendEvent";
import ArtCreation from "../Home/ArtCreation";
import Footer from "../Home/Footer";

const Home = () => {
  return (
    <section className="bg-dark xl:pt-10">
      <div className="relative pb-16 h-full items-center justify-center rounded-b-[5%] bg-dark2">
        <div className="max-w-[90%] mx-auto px-1 xl:pt-24 items-center xl:grid xl:grid-cols-2 h-full pt-40">
          <div className="flex flex-col justify-center h-full md:basis-2/3 text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-4">
              African Techies Unleash Your Full Potential
            </h1>
            <p className="mb-6 mr-0 xl:mr-6 text-[#F2F2F2] font-normal  xl:text-lg">
              We believe in empowering every tech visionary to achieve their
              greatest potential. Join us to elevate your skills and transform
              your tech dreams into reality. Let's innovate together!
            </p>
            <div className=" w-56">
              <Button>Join our community</Button>
            </div>
          </div>
          <div className="hidden md:grid basis-1/3 pt-20">
            <img
              src={BackgroundImg}
              alt="Background Image"
              className=" h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col text-white pt-10 xl:pt-3 max-w-[90%] mx-auto">
          <h3 className="text-lg xl:text-2xl mb-8">Our Brands and Partners:</h3>
          <div className="flex flex-col xl:justify-between xl:flex xl:flex-row xl:w-[75%] xl:gap-72  gap-5 w-[50%] pr-2 sm:pr-0">
            <div className="flex gap-5 xl:mr-20">
              <img
                className=""
                src={BrandsImg1}
                alt="Brands and Partners Image"
              />
              <img src={BrandsImg2} alt="Brands and Partners Image" />
            </div>

            <div className="flex gap-5">
              <img
                className=""
                src={BrandsImg1}
                alt="Brands and Partners Image"
              />
              <img src={BrandsImg1} alt="Brands and Partners Image" />
            </div>
          </div>
        </div>
      </div>
      <Idea />
      <Unveiling />
      <OurServices />
      <WeekendEvent />
      <ArtCreation />
      <Footer />
    </section>
  );
};

export default Home;
