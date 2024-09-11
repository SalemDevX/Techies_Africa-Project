import { useState } from "react";
import Img1 from "../Asset/Frame 3.png";
import Img2 from "../Asset/Frame 383.png";
import Img3 from "../Asset/Frame 3839.png";
import Button from "../Button";
import Attention from "./Attention";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OurProject = () => {
  const categories = [
    "All Projects",
    "Branding & Design",
    "Software Development",
    "AI and Automations",
    "Integration & Package Dev",
    "Software Security",
  ];

  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentPage, setCurrentPage] = useState(1);

  const cards = [
    {
      id: 1,
      img: Img1,
      title: "Digital Branding Website",
      category: "Branding & Design",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 2,
      img: Img2,
      title: "Tasks Manager App",
      category: "Software Development",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 3,
      img: Img3,
      title: "Revolve Brand Identity",
      category: "Branding & Design",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 4,
      img: Img1,
      title: "E-commerce Platform",
      category: "Software Development",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 5,
      img: Img2,
      title: "AI-powered Chatbot",
      category: "AI and Automations",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 6,
      img: Img3,
      title: "Security Monitoring System",
      category: "Software Security",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 7,
      img: Img1,
      title: "Integration Platform",
      category: "Integration & Package Dev",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 8,
      img: Img2,
      title: "Brand Strategy Workshop",
      category: "Branding & Design",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 9,
      img: Img3,
      title: "Automation Tool Suite",
      category: "AI and Automations",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      by: "By: Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
  ];

  const filteredCards =
    activeCategory === "All Projects"
      ? cards
      : cards.filter((card) => card.category === activeCategory);

  const cardsPerPage = 9; // Show 9 cards per page
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const getPaginationButtons = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const currentCards = filteredCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <section>
      <div className="bg-white relative pb-12 h-full">
        <div className="max-w-[90%] mx-auto xl:mb-0 items-center h-full">
          <div className="flex flex-col justify-center h-full text-dark">
            <h6 className="font-semibold text-2xl xl:mt-10 pt-7 text-[#5846FB] mb-4">
              Our Projects
            </h6>
            <h1 className="text-5xl xl:text-[70px] font-semibold mb-4 break-all xl:whitespace-nowrap">
              Our Groundbreak{""}ing Projects
            </h1>
            <p className="mb-2 mr-10 text-xl xl:text-base font-semibold text-[#000000]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          {/* Categories bar */}
          <div className="flex overflow-x-auto lg:w-[90%] space-x-4 py-2 px-3 bg-[#EAEBF0] rounded-lg">
            {categories.map((category) => (
              <div
                key={category}
                className={`py-2 px-4 rounded-lg cursor-pointer whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-white font-bold text-sm xl:text-base text-dark"
                    : "bg-transparent font-bold text-sm xl:text-base text-[#5f6D7E]"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {currentCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-2xl shadow-md overflow-hidden bg-dark"
                >
                  <div className="relative h-40">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-[240px] object-cover"
                    />
                  </div>
                  <div className="pt-24 px-10 text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 mb-2 text-[#9D9FA1]">
                      {card.description}
                    </p>
                    <p className="mb-4">{card.by}</p>
                    <div className="flex gap-3">
                      <div className="text-white text-xs lg:text-xs xl:text-base">
                        <Button>{card.button1}</Button>
                      </div>
                      <div className="text-secondary mb-5 text-xs lg:text-xs xl:text-base">
                        <Button
                          backgroundColor="black"
                          borderColor="#A24EEC"
                          className="bg-dark border-8 border-solid border-secondary"
                        >
                          {card.button2}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 border flex items-center gap-2 rounded-lg bg-white shadow-md text-gray-500 hover:bg-gray-200"
              >
                <FaArrowLeft /> Previous
              </button>

              {getPaginationButtons().map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`p-2 px-4 rounded-lg ${
                    pageNumber === currentPage
                      ? "bg-gray-200 text-gray-900 font-bold"
                      : "bg-white text-gray-600"
                  } shadow-md hover:bg-gray-200`}
                >
                  {pageNumber}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 flex items-center gap-2 border rounded-lg bg-white shadow-md text-gray-500 hover:bg-gray-200"
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Attention />
    </section>
  );
};

export default OurProject;
