import React from "react";
import image from "../Asset/amico.png";
import facebook from "./Pictures/Facebook-button.png";
import whatsapp from "./Pictures/Whatsapp-button.png";
import twitter from "./Pictures/X-button.png";
import instagram from "./Pictures/Instagram-button.png";


const GetInTouch = () => {
  return (
    <section>
      <div className="bg-white ">
        <div className="flex flex-col max-w-[95%] xl:max-w-[90%] mx-auto md:flex-row justify-between lg:items-center p-4">
          {/* Text Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="font-semibold lg:text-2xl pt-5 lg:pt-0 text-[#5846FB] mb-2 md:mb-0">
              Contact Us
            </p>
            <h1 className="text-5xl lg:text-[75px] font-semibold mb-2 md:mb-0 xl:mr-32 text-dark">
              Get in Touch With Us
            </h1>
            <div className="mt-6">
              <p className="font-semibold text-2xl mb-2">Email Address:</p>
              <p className="text-gray-600 text-base">
                contactus@techiesafrica.com
              </p>
            </div>
            <div className="mt-5">
              <p className="font-semibold text-2xl">Phone Number:</p>
              <p className="text-gray-600 text-base">+234 123 456 789</p>
            </div>
            <div className="mt-5">
              <p className="font-semibold text-2xl">Social Handles:</p>
              <div className="flex mt-2 w-[60%]" >
                <a>
                  
                  <img className="w-[70%]" src={facebook} alt="" />
                </a>
                <a>
              
                  <img className="w-[70%]" src={whatsapp} alt="" />
                </a>
                <a>
            
                  <img className="w-[70%]" src={twitter} alt="" />
                </a>
                <a>
                  <img className="w-[70%]" src={instagram} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center pt-20 pb-5 lg:pb-20">
            <img
              src={image}
              alt="Contact Us"
              className="max-w-full xl:max-w-[90%] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
