import React from 'react'

const Pagination = ({ pages }) => {
    return (
        <ul>
            {
                pages.map((page) => (<li key={page}>{page}</li>
                ))}
        </ul>
    )
}

export default Pagination