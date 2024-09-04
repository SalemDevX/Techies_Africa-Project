import { useState, useEffect, useRef } from "react";
import ChatGpt from "../Asset/Icon/ChatGPT-Icon.png";
import DesignIcon from "../Asset/Icon/Design-Icon.png";
import InnovationIcon from "../Asset/Icon/Innovation-Icon.png";
import Laptop from "../Asset/Icon/LaptopSettings-Icon.png";
import QueryInner from "../Asset/Icon/QueryInnerJoin-Icon.png";
import SecuritySheild from "../Asset/Icon/SecurityShield-Icon.png";

const Services = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollContainerRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Software <br /> Development",
      content:
        "Cum et convallis risus placerat aliquam, <br /> nunc. Scelerisque aliquet",
      img: Laptop,
    },
    {
      id: 2,
      title: "AI and <br /> Automations",
      content:
        "Cum et convallis risus placerat aliquam, <br /> nunc. Scelerisque aliquet",
      img: ChatGpt,
    },
    {
      id: 3,
      title: "Integration & <br /> Package Dev",
      content:
        "Cum et convallis risus placerat aliquam, <br /> nunc. Scelerisque aliquet",
      img: QueryInner,
    },
    {
      id: 4,
      title: "Software <br /> Security",
      content:
        "Cum et convallis risus placerat aliquam, <br /> nunc. Scelerisque aliquet",
      img: SecuritySheild,
    },
    {
      id: 5,
      title: "Branding & <br /> Design",
      content:
        "Cum et convallis risus placerat aliquam, <br /> nunc. Scelerisque aliquet",
      img: DesignIcon,
    },
    {
      id: 6,
      title: "Talent <br /> Sourcing",
      content:
        "Cum et convallis risus placerat aliquam, <br /> nunc. Scelerisque aliquet",
      img: InnovationIcon,
    },
  ];

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll for small screens
  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentSet((prevSet) => {
          const nextSet = (prevSet + 1) % Math.ceil(cards.length / 2);
          return nextSet;
        });
      }, 4000); // Time between scrolls (4 seconds)

      return () => clearInterval(interval);
    }
  }, [isSmallScreen, cards.length]);

  // Calculate cards to show based on screen size and current set
  const displayCards = isSmallScreen
    ? cards.slice(currentSet * 2, currentSet * 2 + 2)
    : cards;

  return (
    <div className="bg-white relative pb-12 h-full">
      <div className="max-w-[90%] mx-auto mb-10 xl:mb-0 xl:py-10 items-center h-full">
        <div className="flex flex-col justify-center h-full text-dark">
          <h6 className="font-semibold text-2xl pt-6 text-[#5846FB] mb-4">
            Our Services
          </h6>
          <h1 className="text-5xl xl:text-[70px] font-semibold mb-4">
            What we do at Techies Africa
          </h1>
          <p className="mb-2 mr-10 xl:mr-72 text-xl xl:text-lg font-semibold text-[#000000]">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div className="pt-5">
          <div className="">
            {/* Grid layout for small and medium screens */}
            <div
              ref={scrollContainerRef}
              className={`grid gap-5 ${
                isSmallScreen
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {displayCards.map((card) => (
                <div
                  key={card.id}
                  className="shadow-lg rounded-3xl px-2 py-5 items-center relative bg-[#F0F0F0]"
                >
                  {/* Unique icon for each card */}
                  <div className="absolute top-4 left-4 text-yellow-500 bg-primary rounded-full p-3 xl:mx-2 my-5">
                    <img className="w-12 h-12" src={card.img} alt="" />
                  </div>
                  <div className="mx-2 pt-80 flex flex-col">
                    <h3 className="text-4xl xl:text-5xl font-normal mb-4 xl:mx-4">
                      {card.title.split("<br />").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                    <p className="text-base xl:text-lg font-semibold xl:mx-4 mb-3">
                      {card.content.split("<br />").map((paragraph, index) => (
                        <span key={index}>
                          {paragraph}
                          <br />
                        </span>
                      ))}
                    </p>
                    <p className="text-[#5846FB] font-bold xl:mx-4">
                      Learn More
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
