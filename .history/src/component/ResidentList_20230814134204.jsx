import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import classnames from "classnames";

export const ResidentList = ({ residents }) => {
  // Definición de la cantidad de residentes por página
  const RESIDENTS_PER_PAGE = 9;

  // Estado para almacenar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculo del número total de páginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  // Función para manejar el cambio de página
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Selección de los residentes para mostrar en la página actual
  const residentsInPage = residents.slice(
    (currentPage - 1) * RESIDENTS_PER_PAGE,
    currentPage * RESIDENTS_PER_PAGE
  );

  // Determinar si mostrar los índices de paginación
  const showIndexPagination = totalPages > 4;

  return (
    <section>
      {/* Sección para mostrar las tarjetas de residentes */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
  <      {/* Sección para la paginación */}
        <div className="pagination justify-center gap-4 my-4">
          {showIndexPagination && (
            <div className="flex items-center space-x-4">
              {/* Creación de los índices de paginación */}
              {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
                <div
                  key={index}
                  // Aplicación de clases condicionales para los índices
                  className={classnames(
                    "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446]",
                    {
                      "bg-opacity-50": currentPage === index,
                      "bg-[#EDE288] hover:bg-opacity-50 cursor-pointer transition-opacity":
                        currentPage !== index,
                    }
                  )}
                  // Manejo del clic en el índice
                  onClick={() => handlePageChange(index)}
                >
                  {index}
                </div>
              ))}
            </div>>
        )}
        {/* Botón de paginación anterior */}
        <button
          // Aplicación de clases condicionales para el botón previo
          className={classnames(
            "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446] btn btn-primary prev",
            {
              "opacity-50 pointer-events-none": currentPage === 1,
            }
          )}
          // Manejo del clic en el botón previo
          onClick={() => handlePageChange(currentPage - 1)}
          // Deshabilitar el botón previo si es la primera página
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {/* Botón de paginación siguiente */}
        <button
          // Aplicación de clases condicionales para el botón siguiente
          className={classnames(
            "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446] btn btn-primary next",
            {
              "opacity-50 pointer-events-none": currentPage === totalPages,
            }
          )}
          // Manejo del clic en el botón siguiente
          onClick={() => handlePageChange(currentPage + 1)}
          // Deshabilitar el botón siguiente si es la última página
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ResidentList;
