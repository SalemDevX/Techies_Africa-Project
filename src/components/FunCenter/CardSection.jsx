import Img1 from "../Asset/Frame 38391.png";
import Img2 from "../Asset/Frame 38.png";
import Img3 from "../Asset/Frame 383910.png";


const CardSection = () => {
  const cards = [
    {
      id: 1,
      img: Img1,
      title: "Techlife",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet.",
    },
    {
      id: 2,
      img: Img2,
      title: "Techies Assemble",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet.",
    },
    {
      id: 3,
      img: Img3,
      title: "Leaders Match",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet.",
    },
  ];
  return (
    <section className="bg-dark">
      <div className="bg-white relative pb-12 h-full">
        <div className="max-w-[90%] mx-auto   xl:mb-0  items-center h-full">
          <div className="flex flex-col justify-center h-full text-dark">
            <h6 className="font-semibold text-2xl xl:mt-10 pt-7 text-[#5846FB] mb-4">
              Events
            </h6>
            <h1 className="text-5xl xl:text-[70px] font-semibold mb-4 break-all xl:whitespace-nowrap">
              Exciting Up and Coming Events
            </h1>
            <p className="mb-3  text-xl xl:text-base font-semibold text-[#000000]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor. Cum
              et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="mt-8 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-3xl shadow-md overflow-hidden bg-dark border border-dark"
                >
                  <div className="relative h-40">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="pt-80 px-5 text-white">
                    <h3 className="text-4xl pt-10 font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 mb-6 text-[#9D9FA1]">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default CardSection;
