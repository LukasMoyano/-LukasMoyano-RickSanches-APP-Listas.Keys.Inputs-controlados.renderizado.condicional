const Pagination = ({ pages, setCurrentPage, CurrentPage }) => {
    return (
        <section>
          <section className="grid  grid-cols-1 gap-28">
            {residentsInPage.map((resident) => (
              <ResidentCard key={resident} residentUrl={resident} />
            ))}
          </section>
          <ul className="flex space-x-4 mt-8 border-8 border-red-500 rounded-lg bg-yellow-200 p-4 w-96 h-96 absolute top-801px left-643px">
            {pages.map((page) => (
              <li
                key={page}
                className="border border-r-0 border-b-0 border-t-0 border-l border-gray-400 p-2 rounded-md"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </li>
            ))}
          </ul>
          <Pagination
            pages={pages}
            setCurrentPage={setCurrentPage}
            CurrentPage={currentPage}
          />
        </section>
      );
      
};

export default Pagination