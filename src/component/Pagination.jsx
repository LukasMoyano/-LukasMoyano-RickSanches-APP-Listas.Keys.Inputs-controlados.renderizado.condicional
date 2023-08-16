const Pagination = ({ pages, setCurrentPage, CurrentPage }) => {
  return (
    <ul className="grid  grid-cols-1 gap-10">
      {pages.map((page) => (
          <li
          key={page}
          className={`${CurrentPage === page && "border border-r-0 border-b-0 border-t-0 border-l border-gray-400 p-2 rounded-md"}`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
