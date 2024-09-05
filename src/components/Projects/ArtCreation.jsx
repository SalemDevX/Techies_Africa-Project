import React from "react";
import Video from "../Asset/video.png";
import Button from "../Button";
import NewsLetter from "../Home/NewsLetter";

const ArtCreation = () => {
  return (
    <section>
      <div className=" bg-dark">
        <div className="max-w-[90%] bg-dark mx-auto  pt-7 xl:pt-20 flex flex-col-reverse items-center xl:grid xl:grid-cols-2 h-full max-w gap-x-10 pb-5 xl:pb-20">
          <div className=" md:grid md:basis-1/5">
            <img src={Video} alt="" className="w-auto h-full object-cover" />
          </div>
          <div className="flex flex-col xl:pt-30 xl:pl-20 justify-center h-full md:grid md:basis-2/3 text-dark">
            <h6 className=" font-semibold xl:text-2xl  text-[#5846FB] mb-2 md:mb-0">
              Our Work Process
            </h6>
            <h1 className="text-5xl xl:text-[75px] font-semibold mb-2 md:mb-0 xl:mr-32 text-white">
              The Art of Our Creative Process
            </h1>
            <p className=" mb-2 mr-0 xl:mr-10 text-justify text-lg font-light text-white">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
            <div className=" w-36 mb-10 text-white">
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
