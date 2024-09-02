import React from "react";
import Video from "../Asset/video.png";
import Button from "../Button";

const ArtCreation = () => {
  return (
    <section>
      <div className=" bg-white">
        <div className="max-w-[85%] bg-white mx-auto px-1 pt-16 xl:pt-20 flex flex-col-reverse items-center xl:grid xl:grid-cols-2 h-full max-w gap-x-10 mb-12">
          <div className=" xl:m-4 md:grid md:basis-1/3">
            <img src={Video} alt="" className="w-auto h-full object-cover" />
          </div>
          <div className="flex flex-col xl:pl-44 justify-center h-full md:grid md:basis-2/3 text-dark">
            <h6 className=" font-semibold xl:text-2xl  text-[#5846FB] mb-4">
              What is techies Community
            </h6>
            <h1 className="text-4xl xl:leading-[120%] xl:text-7xl font-normal mb-4 xl:mr-20 text-dark">
              Unveiling TechiesAfrica Community
            </h1>
            <p className=" mb-4 xl:mb-10 mr-0 xl:mr-22 xl:text-lg font-light text-dark">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className=" w-36 mb-12 text-white">
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtCreation;
