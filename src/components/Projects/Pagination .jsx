import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showMore, setShowMore] = useState(false);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleToggleMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="max-w-[100%] mx-auto xl:mb-0 items-center h-full">
      <div className="flex flex-wrap justify-center items-center mt-8 space-x-2">
        {/* Previous button */}
        <button className="items-center px-4 py-2 border border-[#b3b3b3] rounded-lg text-gray-600 bg-white hover:bg-gray-200 hidden sm:flex">
          <FaArrowLeft className="mr-2" />
          Previous
        </button>
        <button className="flex items-center p-2 border border-[#b3b3b3] rounded-lg text-gray-600 bg-white sm:hidden">
          <FaArrowLeft />
        </button>

        {/* Page numbers */}
        <div className="lg:w-[75%] flex items-center justify-center">
          <div className="hidden md:flex gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? "shadow-lg bg-[#EFF1F4] font-semibold"
                    : "bg-white text-gray-600 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-4 py-2">...</span>
            {[8, 9, 10].map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === page
                    ? "shadow-lg bg-[#EFF1F4] font-semibold"
                    : "bg-white text-gray-600 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 mx-1 py-2 rounded-lg ${
                  currentPage === page
                    ? "bg-[#EFF1F4] font-semibold"
                    : "bg-white text-gray-600 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            ))}

            {!showMore && (
              <button
                onClick={handleToggleMore}
                className="px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-gray-200"
              >
                ...
              </button>
            )}
            {showMore && (
              <>
                {[4, 5, 6, 7, 8, 9, 10].map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? "bg-[#EFF1F4] font-semibold"
                        : "bg-white text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Next button */}
        <button className="items-center px-4 py-2 border border-[#b3b3b3] rounded-lg text-gray-600 bg-white hover:bg-gray-200 hidden sm:flex">
          Next
          <FaArrowRight className="ml-2" />
        </button>
        <button className="flex items-center p-2 border border-[#b3b3b3] rounded-lg text-gray-600 bg-white sm:hidden">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Pagination;
