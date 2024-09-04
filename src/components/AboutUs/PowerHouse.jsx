import React from "react";
import { useState, useEffect, useRef } from "react";
import FounderImage from "../Asset/image 14.png";

const PowerHouse = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollContainerRef = useRef(null);

  const cards = [
    {
      id: 1,
      name: "Confidence Ugolo",
      title: "Founder",
      img: FounderImage,
    },
    {
      id: 2,
      name: "Confidence Ugolo",
      title: "Founder",
      img: FounderImage,
    },
    {
      id: 3,
      name: "Confidence Ugolo",
      title: "Founder",
      img: FounderImage,
    },
    {
      id: 4,
      name: "Confidence Ugolo",
      title: "Founder",
      img: FounderImage,
    },
    {
      id: 5,
      name: "Confidence Ugolo",
      title: "Founder",
      img: FounderImage,
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

  // Autoplay for small screens only
  useEffect(() => {
    if (isSmallScreen) {
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / cards.length;

      const interval = setInterval(() => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + cardWidth;
          if (newPosition >= container.scrollWidth) {
            container.scrollLeft = 0;
            return 0;
          } else {
            container.scrollLeft = newPosition;
            return newPosition;
          }
        });
      }, 2000); // Time between scrolls (2 seconds)

      return () => clearInterval(interval);
    }
  }, [scrollPosition, isSmallScreen, cards.length]);

  return (
    <div className="relative pb-12 h-full">
      <div className="max-w-[90%] mx-auto mb-10 xl:mb-0 xl:py-10 items-center h-full max-w">
        <div className="flex flex-col justify-center h-full text-white">
          <h6 className="font-semibold text-2xl pt-6 text-[#5846FB] mb-4">
            Our Team
          </h6>
          <h1 className="text-5xl xl:text-[70px] font-semibold mb-4">
            What we do at Techies Africa
          </h1>
          <p className="mb-2 mr-10 xl:mr-72 text-xl xl:text-base font-semibold">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor. Cum et
            convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus
            tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
        </div>
        <div
          className={`w-full overflow-hidden bg-dark ${
            isSmallScreen ? "scroll-snap-container" : ""
          }`}
        >
          <div className=" ">
            <div
              ref={scrollContainerRef}
              className={`flex space-x-4 gap-3 ${
                isSmallScreen ? "snap-x snap-mandatory" : ""
              }`}
              style={{
                overflowX: isSmallScreen ? "scroll" : "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="inline-block border border-[#282828] min-w-[350px] xl:min-w-[200px] xl:max-w-[300px] shadow-lg rounded-3xl items-center relative bg-black snap-center"
                >
                  {/* Darkened Image for each card */}
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-auto rounded-t-lg filter brightness-50"
                  />
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
                    <p className="text-sm text-[#9D9FA1]">{card.title}</p>
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

export default PowerHouse;
