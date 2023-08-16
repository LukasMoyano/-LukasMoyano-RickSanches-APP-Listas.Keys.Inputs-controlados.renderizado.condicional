import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import ReactPaginate from "react-paginate";

export const ResidentList = ({ residents }) => {
  const RESIDENTS_PER_PAGE = 9;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(0); // Cambio: react-paginate usa índices basados en 0

  const residentsInPage = residents.slice(
    currentPage * RESIDENTS_PER_PAGE,
    (currentPage + 1) * RESIDENTS_PER_PAGE
  );

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  return (
    <section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <ReactPaginate
        className="pagination justify-content-center gap-4 my-4"
        forcePage={currentPage} // Cambio: adaptar a índices basados en 0
        nextLabel="Siguiente"
        previousLabel="Anterior"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName="active"
        onPageChange={handlePageChange}
        pageCount={totalPages}
      />
    </section>
  );
};

export default ResidentList;
