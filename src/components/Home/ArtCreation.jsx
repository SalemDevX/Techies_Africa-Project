import React from "react";
import Video from "../Asset/video.png";
import Button from "../Button";
import NewsLetter from "./NewsLetter";

const ArtCreation = () => {
  return (
    <section>
      <div className=" bg-white">
        <div className="max-w-[90%] bg-white mx-auto  pt-7 xl:pt-20 flex flex-col-reverse items-center xl:grid xl:grid-cols-2 h-full max-w gap-x-10 pb-5 xl:pb-20">
          <div className=" md:grid md:basis-1/5">
            <img src={Video} alt="" className="w-auto h-full object-cover" />
          </div>
          <div className="flex flex-col xl:pt-30 xl:pl-20 justify-center h-full md:grid md:basis-2/3 text-dark">
            <h6 className=" font-semibold xl:text-2xl  text-[#5846FB] mb-4">
              Our Work Process
            </h6>
            <h1 className="text-5xl xl:text-[70px] font-semibold mb-4 xl:mr-20 text-dark">
              The Art of Our Creative Process
            </h1>
            <p className=" mb-2 xl:mb-10 mr-0 xl:mr-22 text-lg font-light text-dark">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className=" w-36 mb-12 text-white">
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
    </section>
  );
};

export default ArtCreation;
