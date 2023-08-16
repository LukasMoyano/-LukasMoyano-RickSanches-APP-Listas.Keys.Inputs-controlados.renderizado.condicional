import React, { useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

export const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const RESIDENTS_PER_PAGE = 9;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {residentsInPage.map((resident) => (
        <div key={resident} className="flex justify-center">
          <ResidentCard residentUrl={resident} />
        </div>
      ))}
      <Pagination
        className="col-span-3 md:col-span-1"
        pages={pages}
        setCurrentPage={setCurrentPage}
        CurrentPage={currentPage}
      />
    </section>
  );
};
