import React from "react";
import classnames from "classnames";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showIndexPagination = totalPages > 3;

  return (
    <div className="flex items-center space-x-4">
      {showIndexPagination &&
        Array.from({ length: totalPages }, (_, index) => index + 1).map((index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={classnames(
              "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446]",
              {
                "bg-opacity-50": currentPage === index,
                "bg-[#EDE288] hover:bg-opacity-50 cursor-pointer transition-opacity":
                  currentPage !== index,
              }
            )}
          >
            {index}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
