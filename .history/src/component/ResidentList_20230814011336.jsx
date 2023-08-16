import React, { useState } from "react";
import ResidentCard from "./ResidentCard";

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

  return (
    <section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <div className="pagination justify-content-center gap-4 my-4">
        <button
          className="btn btn-primary prev"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          className="btn btn-primary next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};

export default ResidentList;
