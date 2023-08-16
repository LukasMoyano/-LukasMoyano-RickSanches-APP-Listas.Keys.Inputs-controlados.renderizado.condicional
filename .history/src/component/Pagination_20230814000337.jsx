const Pagination = ({ pages, setCurrentPage, CurrentPage }) => {
    return (
        <ul>
            {
                pages.map((page) => (
                <li className="" onClick={() => setCurrentPage(page)} key={page}>{page}</li>
                ))}
        </ul>
    );
};

export default Pagination