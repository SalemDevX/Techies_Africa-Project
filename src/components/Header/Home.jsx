import React from "react";
import Button from "../Button";
import BackgroundImg from "../Asset/Hero/Map.png";

const Home = () => {
  return (
    <div className="relative h-full bg-dark2 rounded-b-3xl">
      <div className="max-w-[85%] mx-auto px-1 pt-32 items-center xl:grid lg:grid-cols-2 h-full max-w">
        <div className="flex flex-col justify-center h-full basis-1/3 text-white">
          <h1 className=" text-4xl xl:text-7xl font-bold mb-4 ">
            African Techies Unleash Your Full Potential
          </h1>
          <p className="mb-6 mr-0 xl:mr-6 text-base xl:text-lg ">
            We believe in empowering every tech visionary to achieve their
            greatest potential. Join us to elevate your skills and transform
            your tech dreams into reality. Let's innovate together!
          </p>
          <Button>Join our community</Button>
        </div>
        <div className="hidden md:grid md:basis-2/3 pt-20">
          <img src={BackgroundImg} alt="" className="w-auto h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;