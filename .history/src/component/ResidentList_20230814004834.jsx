import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

export const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const RESIDENTS_PER_PAGE = 9;

  //CANTIDAD TOTAL DE PAGUINAS
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //Residentes que se muestran por paguina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);
  

  //generacion de las paguinas que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section>
      <section className="grid  grid-cols-1 gap-28">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination
      className="col-span-3 md:col-span-1"
        pages={pages}
        setCurrentPage={setCurrentPage}
        CurrentPage={currentPage}
      />
    </section>
  );
};

export default ResidentList;
