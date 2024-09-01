import IdeaImg from "../Asset/right-side.png";
import Button from "../Button";

const Idea = () => {
  return (
    <section>
      <div className="bg-white relative pb-12 h-full">
        <div className="max-w-[85%] mx-auto px-1 py-20 items-center xl:grid lg:grid-cols-2 h-full max-w">
          <div className="flex flex-col justify-center h-full basis-1/3 text-dark">
            <h6 className=" font-semibold text-2xl text-[#5846FB] mb-8">
              Who we are at Techies Africa
            </h6>
            <h1 className="text-5xl xl:text-7xl font-semibold mb-4 xl:pr-40">
              The Idea Behind our Innovation
            </h1>
            <p className="mb-10 mr-0 xl:mr-20 text-lg font-medium text-dark">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className=" w-36 text-white">
              <Button>See More</Button>
            </div>
          </div>
          <div className=" md:grid md:basis-2/3 pt-12">
            <img src={IdeaImg} alt="" className="w-auto h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
