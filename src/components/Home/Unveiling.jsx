import UnveilingImg from "../Asset/left-side.png";
import Button from "../Button";

const Unveiling = () => {
  return (
    <section>
      <div className=" bg-dark">
        <div className="max-w-[85%] mx-auto px-1 pt-16 xl:pt-20 flex flex-col-reverse items-center xl:grid xl:grid-cols-2 h-full max-w gap-x-10 mb-12">
          <div className=" xl:m-4 md:grid md:basis-1/3">
            <img
              src={UnveilingImg}
              alt=""
              className="w-auto h-full object-cover"
            />
          </div>
          <div className="flex flex-col xl:pl-44 justify-center h-full md:grid md:basis-2/3 text-dark">
            <h6 className=" font-semibold xl:text-2xl  text-[#5846FB] mb-4">
              What is techies Community
            </h6>
            <h1 className="text-4xl xl:leading-[120%] xl:text-7xl font-normal mb-4 xl:mr-20 text-white">
            Unveiling TechiesAfrica Community
            </h1>
            <p className=" mb-4 xl:mb-10 mr-0 xl:mr-22 xl:text-lg font-light text-[#F2F2F2]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className=" w-60 mb-12 xl:mb-0 text-white">
              <Button>Join our community</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unveiling;
