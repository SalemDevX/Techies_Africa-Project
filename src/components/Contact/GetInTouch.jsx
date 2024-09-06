import React from "react";
import 
import image from "../Asset/amico.png";

const GetInTouch = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-white shadow-md">
      {/* Text Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <p className="text-blue-500 font-semibold">Contact Us</p>
        <h1 className="text-3xl font-bold mt-2">Get in Touch With Us</h1>
        <div className="mt-4">
          <p className="font-semibold">Email Address:</p>
          <p className="text-gray-600">contactus@techiesafrica.com</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Phone Number:</p>
          <p className="text-gray-600">+234 123 456 789</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Social Handles:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="bg-gray-100 p-2 rounded-full">
              <FaFacebookF className="text-blue-600" />
            </a>
            <a href="#" className="bg-gray-100 p-2 rounded-full">
              <FaWhatsapp className="text-green-500" />
            </a>
            <a href="#" className="bg-gray-100 p-2 rounded-full">
              <FaXTwitter className="text-blue-500" />
            </a>
            <a href="#" className="bg-gray-100 p-2 rounded-full">
              <FaInstagram className="text-purple-600" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src={image} alt="Contact Us" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default GetInTouch;
