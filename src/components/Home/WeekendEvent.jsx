import EventImg from "../Asset/PhotoRoom.png";
import Button from "../Button";
import Xsign from "../Asset/X-sign.png";

const WeekendEvent = () => {
  return (
    <section>
      <div className="relative">
        <div className="max-w-[90%] mx-auto items-center xl:grid lg:grid-cols-2 max-w">
          <div className="flex  pt-10 xl:pt-0 flex-col justify-center basis-1/5">
            <h6 className=" font-semibold text-2xl text-[#5846FB] mb-4">
              Who we are at Techies Africa
            </h6>
            <h1 className="text-white text-5xl xl:text-[70px] font-semibold mb-4 xl:pr-2">
              Join The Techies Event Every{" "}
              <span className="flex items-center">
                Weekend on <img className="w-8 xl:w-16 xl:ml-8 ml-4" src={Xsign} alt="Xsign" />
              </span>
            </h1>
            <p className="mb-10 mr-0 xl:mr-20 text-lg font-medium text-white">
              Look no further! Our game shows offer the easiest way to dive into
              an exciting online gaming experience.
            </p>
            <div className=" w-72 text-white">
              <Button>Follow Techies Africa on X</Button>
            </div>
          </div>
          <div className=" md:grid md:basis-2/3 pt-12">
            <img src={EventImg} alt="" className="w-[90%] xl:ml-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendEvent;
