import React from "react";
import FacebookImg from "../Asset/Socials/Facebook-logo.png";
import TwitterImg from "../Asset/Socials/Twitter-logo.png";
import WhatsappImg from "../Asset/Socials/Whatsapp-logo.png";
import InstagramImg from "../Asset/Socials/Instagram-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">
            <img src={FacebookImg} alt="" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={TwitterImg} alt="" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={WhatsappImg} alt="" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={InstagramImg} alt="" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-gray-400">
            About us
          </a>
          <a href="#" className="hover:text-gray-400">
            Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#" className="hover:text-gray-400">
            Fun Centre
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
