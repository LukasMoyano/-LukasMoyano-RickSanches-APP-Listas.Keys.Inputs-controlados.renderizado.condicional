import React from "react";
import classnames from "classnames";

// Componente Pagination: Renderiza los botones de paginación
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Determina si se deben mostrar los números de índice de paginación
  const showIndexPagination = totalPages > 3;

  return (
    <div className="flex items-center space-x-4">
      {/* Renderiza los botones de índice de paginación */}
      {showIndexPagination &&
        // Crea un array con la longitud total de páginas y mapea cada índice
        Array.from({ length: totalPages }, (_, index) => index + 1).map((index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)} // Llama a la función onPageChange al hacer clic en un botón de índice
            className={classnames(
              "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446]",
              {
                // Aplica estilos diferentes si la página actual coincide con el índice
                "bg-opacity-50": currentPage === index,
                "bg-[#EDE288] hover:bg-opacity-50 cursor-pointer transition-opacity":
                  currentPage !== index,
              }
            )}
          >
            {index} {/* Muestra el número de índice en el botón */}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
