import React, { useState } from "react";
import ResidentCard from "./ResidentCard"; // Importa el componente ResidentCard
import classnames from "classnames"; // Importa la biblioteca classnames para gestionar clases CSS dinámicas

export const ResidentList = ({ residents }) => {

  // Define la cantidad de residentes por página
  const RESIDENTS_PER_PAGE = 9; 

  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1); 


  // Calcula el número total de páginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE); 

  // Función para cambiar la página actual
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Calcula los residentes a mostrar en la página actual
  const residentsInPage = residents.slice(
    (currentPage - 1) * RESIDENTS_PER_PAGE,
    currentPage * RESIDENTS_PER_PAGE
  );


  // Determina si se mostrará la paginación de índice
  const showIndexPagination = totalPages > 3; 

  return (
    <section className="grid w-[100px]">
      <section className="flex flex-wrap items-center gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} /> // Renderiza el componente ResidentCard para cada residente
        ))}
      </section>
      <div className="flex justify-center items-center space-x-4 my-4">
        {showIndexPagination && (
          <div className="flex items-center space-x-4">
            {/* Mapea y renderiza los botones de paginación */}
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
                onClick={() => handlePageChange(index)} // Cambia la página al hacer clic en el botón
              >
                {index}
              </div>
            ))}
          </div>
        )}
        <div>
          {/* Botón para ir a la página anterior */}
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
          {/* Botón para ir a la página siguiente */}
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
