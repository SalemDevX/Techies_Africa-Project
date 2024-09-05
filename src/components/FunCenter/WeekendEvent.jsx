import EventImg from "../Asset/PhotoRoom.png";
import Button from "../Button";
import Xsign from "../Asset/X-sign.png";

const WeekendEvent = () => {
  return (
    <section className="relative ">
      <div className="" />
      <div className="relative z-10 max-w-[90%] mx-auto items-center xl:grid lg:grid-cols-2 pt-10">
        <div className="flex flex-col justify-center basis-1/2 xl:pt-0">
          <h6 className="font-semibold text-2xl text-white mb-4">
            Who we are at Techies Africa
          </h6>
          <h1 className="text-white text-5xl xl:text-[70px] font-semibold mb-4 xl:pr-2">
            Join The Techies Event Every{" "}
            <span className="flex items-center">
              Weekend on{" "}
              <img
                className="w-8 xl:w-16 xl:ml-8 ml-4"
                src={Xsign}
                alt="Xsign"
              />
            </span>
          </h1>
          <p className="mb-10 mr-0 xl:mr-20 text-lg font-medium text-white">
            Look no further! Our game shows offer the easiest way to dive into
            an exciting online gaming experience.
          </p>
          <div className="w-72 text-white">
            <button className="py-3 border-2 font-bold border-white rounded-3xl px-10">
              Follow Techies Africa on X
            </button>
            <p className="text-center mt-5 font-bold">Next Event In 3days</p>
          </div>
        </div>
        <div className="md:grid md:basis-1/2 pt-12 ">
          <img src={EventImg} alt="" className="w-[90%] xl:ml-10" />
        </div>
      </div>
    </section>
  );
};

export default WeekendEvent;
