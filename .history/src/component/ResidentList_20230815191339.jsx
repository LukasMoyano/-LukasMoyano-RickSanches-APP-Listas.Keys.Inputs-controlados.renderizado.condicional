import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import classnames from "classnames";

const ResidentList = ({ residents }) => {
  // Número de residentes por página
  const RESIDENTS_PER_PAGE = 9;
  
  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  // Función para cambiar la página actual
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Obtener los residentes para la página actual
  const residentsInPage = residents.slice(
    (currentPage - 1) * RESIDENTS_PER_PAGE,
    currentPage * RESIDENTS_PER_PAGE
  );

  // Determinar si mostrar la paginación de índices
  const showIndexPagination = totalPages > 3;

  return (
    <section className="bg-gray-100 p-4"> {/* Sección principal */}
      <section className="flex flex-wrap justify-center gap-4"> {/* Contenedor de tarjetas */}
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <div className="flex justify-center items-center space-x-4 my-4"> {/* Contenedor de paginación */}
        {showIndexPagination && (
          <div className="flex items-center space-x-4"> {/* Contenedor de índices de paginación */}
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