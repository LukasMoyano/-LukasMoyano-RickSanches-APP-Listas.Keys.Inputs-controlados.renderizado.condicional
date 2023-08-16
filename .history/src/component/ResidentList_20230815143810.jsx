import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import classnames from "classnames";

export const ResidentList = ({ residents }) => {
  const RESIDENTS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const residentsInPage = residents.slice(
    (currentPage - 1) * RESIDENTS_PER_PAGE,
    currentPage * RESIDENTS_PER_PAGE
  );

  const showIndexPagination = totalPages > 3;

  return (
    <section className="grid grid-wrap justify-center">
      <section className="flex flex-wrap items-center gap-5">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <div className="flex justify-center items-center space-x-4 my-4">
        {showIndexPagination && (
          <div className="flex items-center space-x-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((index) => (
              <div
                key={index}
                className={classnames(
                  "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446]",
                  {
                    "bg-opacity-50": currentPage === index,
                    "bg-[#EDE288] hover:bg-opacity-50 cursor-pointer transition-opacity":
                      currentPage !== index,
                  }
                )}
                onClick={() => handlePageChange(index)}
              >
                {index}
              </div>
            ))}
          </div>
        )}
        <div>
        <button
          className={classnames(
            "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446] btn btn-primary prev",
            {
              "opacity-50 pointer-events-none": currentPage === 1,
            }
          )}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <button
          className={classnames(
            "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446] btn btn-primary next",
            {
              "opacity-50 pointer-events-none": currentPage === totalPages,
            }
          )}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        </div>
      </div>
    </section>
  );
};

export default ResidentList;
