import React from "react";
import image from "../Asset/amico.png";
import { NavLink } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section>
      <div className="bg-white ">
        <div className="flex flex-col max-w-[95%] xl:max-w-[90%] mx-auto md:flex-row justify-between items-center p-4">
          {/* Text Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="font-semibold xl:text-2xl  text-[#5846FB] mb-2 md:mb-0">
              Contact Us
            </p>
            <h1 className="text-5xl xl:text-[75px] font-semibold mb-2 md:mb-0 xl:mr-32 text-dark">
              Get in Touch With Us
            </h1>
            <div className="mt-4">
              <p className="font-semibold text-2xl">Email Address:</p>
              <p className="text-gray-600 text-base">contactus@techiesafrica.com</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-2xl">Phone Number:</p>
              <p className="text-gray-600 text-base">+234 123 456 789</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-2xl">Social Handles:</p>
              <div className="flex space-x-4 mt-2">
                <NavLink></NavLink>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center pt-20">
            <img src={image} alt="Contact Us" className="max-w-full xl:max-w-[90%] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
