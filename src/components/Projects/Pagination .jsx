import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="max-w-[100%] mx-auto xl:mb-0 items-center h-full">
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-2">
        {/* Previous button */}

        <button className=" items-center  px-4 py-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-200 hidden sm:flex">
          <FaArrowLeft className="mr-2" />
          Previous
        </button>
        <button className="flex items-center p-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-200 sm:hidden">
          <FaArrowLeft />
        </button>

        {/* Page numbers */}
        <div className="hidden md:flex">
          <button className="px-4 py-2 rounded-lg border bg-gray-100 text-blue-500 font-semibold">
            1
          </button>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            2
          </button>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            3
          </button>
          <span className="px-4 py-2">...</span>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            8
          </button>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            9
          </button>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            10
          </button>
        </div>

        <div className="md:hidden">
          <button className="px-4 py-2 rounded-lg border bg-gray-100 text-blue-500 font-semibold">
            1
          </button>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            2
          </button>
          <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
            3
          </button>
          {!showMore && (
            <button
              onClick={handleToggleMore}
              className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200"
            >
              ...
            </button>
          )}
          {showMore && (
            <>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                4
              </button>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                5
              </button>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                6
              </button>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                7
              </button>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                8
              </button>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                9
              </button>
              <button className="px-4 py-2 rounded-lg border bg-white text-gray-600 hover:bg-gray-200">
                10
              </button>
            </>
          )}
        </div>

        {/* Next button */}
        <button className=" items-center px-4 py-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-200 hidden sm:flex">
          Next
          <FaArrowRight className="ml-2" />
        </button>
        <button className="flex items-center p-2 border rounded-lg text-gray-600 bg-white hover:bg-gray-200 sm:hidden">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
