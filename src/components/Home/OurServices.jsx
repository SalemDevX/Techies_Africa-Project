import { useState, useEffect, useRef } from "react";
import ChatGpt from "../Asset/Icon/ChatGPT-Icon.png";
import DesignIcon from "../Asset/Icon/Design-Icon.png";
import InnovationIcon from "../Asset/Icon/Innovation-Icon.png";
import Laptop from "../Asset/Icon/LaptopSettings-Icon.png";
import QueryInner from "../Asset/Icon/QueryInnerJoin-Icon.png";
import SecuritySheild from "../Asset/Icon/SecurityShield-Icon.png";
import Button from "../Button";

const OurServices = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("right");
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

  // Autoplay logic for larger screens
  useEffect(() => {
    if (!isSmallScreen) {
      const container = scrollContainerRef.current;

      const interval = setInterval(() => {
        setScrollPosition((prevPosition) => {
          if (scrollDirection === "right") {
            if (
              container.scrollLeft >=
              container.scrollWidth - container.clientWidth
            ) {
              setScrollDirection("left");
            } else {
              return prevPosition + 1;
            }
          } else {
            if (container.scrollLeft <= 0) {
              setScrollDirection("right");
            } else {
              return prevPosition - 1;
            }
          }
          return prevPosition;
        });

        container.scrollLeft = scrollPosition;
      }, 30); // Adjusted to a slower speed

      return () => clearInterval(interval);
    } else {
      // Autoplay for small screens
      const container = scrollContainerRef.current;
      const cardWidth = container.scrollWidth / cards.length;

      const interval = setInterval(() => {
        setScrollPosition((prevPosition) => {
          const newPosition = prevPosition + cardWidth;
          if (newPosition >= container.scrollWidth) {
            container.scrollLeft = 0; // Reset to start when reaching the end
            return 0;
          } else {
            container.scrollLeft = newPosition;
            return newPosition;
          }
        });
      }, 2000); // Time between scrolls (2 seconds)

      return () => clearInterval(interval);
    }
  }, [scrollPosition, scrollDirection, isSmallScreen, cards.length]);

  return (
    <div className="bg-white relative pb-12 h-full">
      <div className="max-w-[90%] mx-auto mb-10 xl:mb-0 xl:py-10 items-center h-full max-w">
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
      </div>
      <div
        className={`w-full overflow-hidden bg-white ${
          isSmallScreen ? "scroll-snap-container" : ""
        }`}
      >
        <div className="px-4 md:px-8">
          {" "}
          {/* Added padding on both ends */}
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
                className="inline-block min-w-[340px] xl:min-w-[450px] xl:max-w-[450px] shadow-lg rounded-3xl px-2 py-5 items-center relative bg-[#F0F0F0] snap-center"
              >
                {/* Unique icon for each card */}
                <div className="absolute top-4 left-4 text-yellow-500 bg-primary rounded-full p-3 xl:mx-2 my-5">
                  <img className="w-12 h-12" src={card.img} alt="" />
                </div>
                <div className="mx-2 pt-80 flex flex-col">
                  <h3 className="text-4xl xl:text-6xl font-normal mb-4 xl:mx-4">
                    {card.title.split("<br />").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </h3>
                  <p className="text-base xl:text-lg font-semibold xl:mx-4  mb-3">
                    {card.content.split("<br />").map((paragraph, index) => (
                      <span key={index}>
                        {paragraph}
                        <br />
                      </span>
                    ))}
                  </p>
                  <p className="text-[#5846FB] font-bold mx-4">Learn More</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center text-secondary pt-8">
        <Button
          backgroundColor="white"
          borderColor="#A24EEC"
          className="bg-white border-8 border-solid border-secondary"
          padding="10px 80px"
        >
          View all services
        </Button>
      </div>
    </div>
  );
};

export default OurServices;
