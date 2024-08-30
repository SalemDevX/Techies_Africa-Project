import React from "react";
import Button from "../Button";
import BackgroundImg from "../Asset/Hero/Map.png";
import BrandsImg from "../Asset/Hero/Partners.png";
import Idea from "../Home/Idea";
import Unveiling from "../Home/Unveiling";

const Home = () => {
  return (
    <section className="bg-dark xl:pt-10 pt-40">
      <div className="relative pb-16 h-full rounded-b-[5%]">
        <div className="max-w-[85%] mx-auto px-1 xl:pt-24 items-center xl:grid lg:grid-cols-2 h-full">
          <div className="flex flex-col justify-center h-full basis-1/3 text-white">
            <h1 className="text-4xl xl:text-8xl font-bold mb-4">
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
          <div className="hidden md:grid md:basis-2/3 pt-20">
            <img
              src={BackgroundImg}
              alt="Background Image"
              className="w-auto h-full object-cover"
            />
          </div>
        </div>
        <div className="text-white pt-10 xl:pt-3 max-w-[85%] mx-auto">
          <h3 className="text-lg xl:text-2xl mb-5">Our Brands and Partners:</h3>
          <img src={BrandsImg} alt="Brands and Partners Image" />
        </div>
      </div>
      <Idea />
      <Unveiling />
    </section>
  );
};

export default Home;
