import React from "react";
import FacebookImg from "../Asset/Socials/Facebook-logo.png";
import TwitterImg from "../Asset/Socials/Twitter-logo.png";
import WhatsappImg from "../Asset/Socials/Whatsapp-logo.png";
import InstagramImg from "../Asset/Socials/Instagram-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[87%] md:border-t md:border-t-[#333333]  mx-auto flex flex-wrap justify-center xl:justify-between items-center">
        {/* Social Media Icons */}

        <div className="flex space-x-6 justify-start  md:py-4 py-3  md:w-[40%]  mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-400">
            <img src={FacebookImg} alt="" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={WhatsappImg} alt="" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={InstagramImg} alt="" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={TwitterImg} alt="" className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center md:flex-wrap md:space-x-8  text-xs md:text-sm w-full md:w-auto">
          <a
            href="#"
            className="hover:text-gray-400 md:text-base w-full md:w-auto mb-2 md:mb-0"
          >
            About us
          </a>
          <a
            href="#"
            className="hover:text-gray-400 w-full md:text-base md:w-auto mb-2 md:mb-0"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:text-gray-400 w-full md:text-base md:w-auto mb-2 md:mb-0"
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:text-gray-400 w-full md:text-base md:w-auto mb-2 md:mb-0"
          >
            Fun Centre
          </a>
          <a
            href="#"
            className="hover:text-gray-400 w-full md:text-base md:w-auto mb-2 md:mb-0"
          >
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
