import IdeaImg from "../Asset/right-side.png";
import Button from "../Button";

const Idea = () => {
  return (
    <section>
      <div className="bg-white relative pb-10 h-full">
        <div className="max-w-[85%] mx-auto px-1 pt-12 xl:pt-20 items-center xl:grid lg:grid-cols-2 h-full max-w">
          <div className="flex flex-col justify-center h-full basis-1/3 text-dark">
            <h6 className=" font-semibold text-lg xl:text-2xl  text-[#5846FB] mb-4">
              Who we are at Techies Africa
            </h6>
            <h1 className="text-4xl xl:leading-[120%] xl:text-7xl font-semibold mb-2 xl:mr-20">
              The Idea Behind our Innovation
            </h1>
            <p className=" mb-4 xl:mb-10 mr-0 xl:mr-20 text-base xl:text-lg font-medium text-dark">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className=" w-36 mb-10 xl:mb-0">
              <Button>See More</Button>
            </div>
          </div>
          <div className=" md:grid md:basis-2/3">
            <img src={IdeaImg} alt="" className="w-auto h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
