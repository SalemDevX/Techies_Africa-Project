import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Logo from "../Asset/Techies-Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinkStyles = ({ isActive, label }) => {
    if (label === "Fun Center") {
      return {
        color: isActive ? "#F7DC6F" : "#A24EEC",
        fontWeight: isActive ? "bold" : "normal",
      };
    } else {
      return {
        color: isActive ? "dark2" : "dark",
        fontWeight: isActive ? "bold" : "normal",
      };
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/aboutus", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/project", label: "Projects" },
    { to: "/funcenter", label: "Fun Center" },
    { to: "/contactus", label: "Contact Us" },
  ];

  return (
    <div
      className="fixed top-0 left-0 w-full h-24 border border-b-secondary bg-white"
      style={{ zIndex: "1000" }}
    >
      <div className="flex justify-between items-center h-24 max-w-[85%] mx-auto px-1 text-white max-w">
        <div className=" logo">
          <NavLink to="/" aria-label="Home" title="Home">
            <img className="w-[230px]" src={Logo} alt="Logo" />
          </NavLink>
        </div>

        <ul className="hidden md:flex items-center w-[60%] justify-center">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="  text-base font-bold text-dark2 m-3 lists"
            >
              <NavLink
                style={({ isActive }) =>
                  navLinkStyles({ isActive, label: link.label })
                }
                to={link.to}
                aria-label={link.label}
                title={link.label}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden  md:flex items-center  gap-x-2 ">
          <div>
            <FiPhoneCall className=" text-3xl text-dark phone" />
          </div>
          <div>
            <p className=" text-sm text-light ">Customer Services</p>
            <p className=" text-base text-dark font-bold ">(234) 123-4567</p>
          </div>
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} color="black" />
          ) : (
            <AiOutlineMenu size={20} color="black" />
          )}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-3 w-full h-full bg-white ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="w-full flex items-center   justify-between m-2">
            <NavLink to="/" aria-label="Home" title="Home">
              <img className="w-[230px]" src={Logo} alt="Logo" />
            </NavLink>

            <div onClick={handleNav} className="block md:hidden mx-4 ">
              {nav ? (
                <AiOutlineClose size={20} color="black" />
              ) : (
                <AiOutlineMenu size={20} color="black" />
              )}
            </div>
          </div>

          {navLinks.map((link, index) => (
            <li
              key={index}
              className="p-2 border border-light rounded-sm m-4 text-base text-dark2"
            >
              <NavLink
                style={({ isActive }) =>
                  navLinkStyles({ isActive, label: link.label })
                }
                to={link.to}
                aria-label={link.label}
                title={link.label}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <div className="p-2 rounded-sm m-4 border border-dark2 flex items-center justify-between">
            <div>
              <p className=" text-xs text-light">Customer Services</p>
              <p className=" text-sm text-dark font-bold">(234) 123-4567</p>
            </div>
            <div className="">
              <FiPhoneCall className=" text-xl text-dark" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
