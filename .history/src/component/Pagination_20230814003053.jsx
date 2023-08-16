const Pagination = ({ pages, setCurrentPage, CurrentPage }) => {
    return (
        <ul className="grid  grid-cols-1 gap-28">
            {
                pages.map((page) => (
                <li className={`${CurrentPage=== page && "bg-yellow-200 text-red-900" }`} onClick={() => setCurrentPage(page)} key={page}>{page}</li>
                ))}
        </ul>
    );
};

export default Pagination