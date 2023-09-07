import React, { useState } from "react";
import classnames from "classnames";
import ResidentCard from "./ResidentCard";

export const ResidentList = ({ residents }) => {
  // Define la cantidad de residentes a mostrar por página
  const RESIDENTS_PER_PAGE = 9;
  // Estado para rastrear la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula el número total de páginas necesarias según la cantidad de residentes
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  // Función para cambiar la página actual
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Obtiene la lista de residentes que deben mostrarse en la página actual
  const residentsInPage = residents.slice(
    (currentPage - 1) * RESIDENTS_PER_PAGE,
    currentPage * RESIDENTS_PER_PAGE
  );

  // Determina si se debe mostrar la paginación con índices
  const showIndexPagination = totalPages > 3;

  return (
    <section className="block max-w-[18rem] ">
      {/* Sección que muestra los residentes en la página actual */}
      <section className="flex flex-wrap items-center gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>

      {/* Controles de paginación */}
      <div className="flex justify-center items-center space-x-4 my-4">
        {/* Si se deben mostrar los índices de páginas */}
        {showIndexPagination && (
          <div className="flex items-center space-x-4">
            {/* Muestra los botones de índice */}
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (index) => (
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
              )
            )}
          </div>
        )}
        {/* Botones de página anterior y siguiente */}
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
