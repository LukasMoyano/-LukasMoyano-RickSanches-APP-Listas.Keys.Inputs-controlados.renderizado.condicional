import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import classnames from "classnames";

// Componente ResidentList: Renderiza una lista de residentes con paginación
export const ResidentList = ({ residents }) => {
  // Constante que define la cantidad de residentes por página
  const RESIDENTS_PER_PAGE = 9;
  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculo del total de páginas requeridas para la paginación
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  // Manejador para el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Array de residentes en la página actual
  const residentsInPage = residents.slice(
    (currentPage - 1) * RESIDENTS_PER_PAGE,
    currentPage * RESIDENTS_PER_PAGE
  );

  // Determina si se deben mostrar los números de índice de paginación
  const showIndexPagination = totalPages > 3;

  return (
    <section className="grid-box grid-flow-row grid-cols-3 gap-5 ">
      <section className="flex flex-wrap items-center gap-4">
        {/* Renderiza las tarjetas de residentes */}
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <div className="flex justify-center items-center space-x-4 my-4">
        {/* Renderiza los botones de paginación */}
        {showIndexPagination && (
          <div className="flex items-center space-x-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
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
        )}
        {/* Renderiza los botones de página previa y siguiente */}
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
