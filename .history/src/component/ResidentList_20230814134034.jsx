import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import classnames from "classnames";

const ResidentList = ({ residents }) => {
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

  const showIndexPagination = totalPages > 4;

  return (
    <section>
      {/* Sección para mostrar las tarjetas de residentes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      {/* Sección para la paginación */}
      <div className="pagination justify-center gap-4 my-4">
        {showIndexPagination && (
          <div className="flex items-center space-x-4">
            {/* Creación de los índices de paginación */}
            {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
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
        {/* Botón de paginación anterior */}
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
        {/* Botón de paginación siguiente */}
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
      </section>
  );
};

export default ResidentList
