import { useState } from "react";
import Img1 from "../Asset/Frame 3.png";
import Img2 from "../Asset/Frame 383.png";
import Img3 from "../Asset/Frame 3839.png";
import Button from "../Button";

const OurProject = () => {
  const cards = [
    {
      id: 1,
      img: Img1,
      title: "Digital Branding Website",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet ",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 2,
      img: Img2,
      title: "Tasks Manager App",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet ",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 3,
      img: Img3,
      title: "Revolve Brand Identity",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet ",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 4,
      img: Img1,
      title: "Digital Branding Website",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 5,
      img: Img2,
      title: "Tasks Manager App",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 6,
      img: Img3,
      title: "Revolve Brand Identity",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 7,
      img: Img1,
      title: "Digital Branding Website",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet ",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 8,
      img: Img2,
      title: "Tasks Manager App",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet ",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
    {
      id: 9,
      img: Img3,
      title: "Revolve Brand Identity",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet ",
      by: "By:Techies Africa",
      button1: "Read More",
      button2: "Contact Creative",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <section>
      <div className="bg-white relative pb-12 h-full">
        <div className="max-w-[90%] mx-auto mb-10 xl:mb-0 xl:py-10 items-center h-full">
          <div className="flex flex-col justify-center h-full text-dark">
            <h6 className="font-semibold text-2xl pt-6 text-[#5846FB] mb-4">
              Our Projects
            </h6>
            <h1 className="text-5xl xl:text-[70px] font-semibold mb-4 mr-44">
              Our Groundbreaking Projects
            </h1>
            <p className="mb-2 mr-10  text-xl xl:text-base font-semibold text-[#000000]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
              {currentCards.map((card) => (
                <div
                  key={card.id}
                  className=" rounded-2xl shadow-md overflow-hidden sm:mr-3 md:mr-5 xl:mr-8 my-4 bg-dark"
                >
                  <div className="relative h-40">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-700 mb-2 text-[#9D9FA1]">
                      {card.description}
                    </p>
                    <p className="mb-4">{card.by}</p>
                    <div className="flex gap-3">
                      <div className=" text-white text-xs lg:text-xs xl:text-base">
                        <Button>{card.button1}</Button>
                      </div>
                      <div className="  text-secondary text-xs lg:text-xs xl:text-base">
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
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-gray-300 py-2 px-4 rounded-lg"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-300 py-2 px-4 rounded-lg"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProject;
