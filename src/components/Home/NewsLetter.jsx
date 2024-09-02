import React from "react";
import Logo from "../Asset/Techies-Logo.png";
import Button from "../Button";

const NewsLetter = () => {
  return (
    <section>
      <div className="bg-[#F2F2F2]">
        <div className="max-w-[85%] mx-auto py-10 flex flex-col xl:flex xl:flex-row  items-center justify-between xl:m">
          <div className=" ml-[-80px] xl:ml-0 mb-5 xl:mb-0">
            <img className="w-[230px]" src={Logo} alt="Logo" />
          </div>

          <div className="flex flex-col xl:flex xl:flex-row items-center gap-6 xl:m-0 mx-5">
            <div className="xl:text-right xl:mx-0">
              <h2 className="text-2xl font-bold mb-5 xl:mb-0">
                Enter your email to get our newsletter
              </h2>
              <p className="text-[#565656] xl:mr-16 font-bold text-sm">
                Pellentesque eu nibh eget mauris congue mattis mattis.
              </p>
            </div>

            {/* Input and Button Section */}
            <div className="flex items-center border border-white text-white rounded-full overflow-hidden bg-white  py-1 pr-1 ">
              <input
                type="text"
                placeholder="Enter your email address"
                className="flex-grow border-none text-dark  xl:px-6 mr-18 py-2 focus:outline-none"
              />
              <div className="">
                <Button padding="8px 35px">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
{
  /* //  </div>  <section>
//       <div className="bg-[#F0F0F0]">
//         <div className="max-w-[85%] mx-auto px-1 py-10 items-center  h-full max-w justify-between flex">
//           {/* Left Section - Logo and Text 
//           <div className="flex items-center">
//             {/* Logo 
//             <div className="text-purple-500 font-bold text-xl mr-8">
//               <span>Techies</span>
//               <span className="text-black">Africa</span>
//             </div>
//             {/* Text 
//             <div className="mr-4">
//               <h2 className="text-lg font-medium">
//                 Enter your email to get our newsletter
//               </h2>
//               <p className="text-sm text-gray-500">
//                 Pellentesque eu nibh eget mauris congue mattis mattis.
//               </p>
//             </div>
//           </div>*/
}

//           {/* Right Section - Input and Button
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
//             />
//             <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-r-md hover:opacity-90">
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }; */}
