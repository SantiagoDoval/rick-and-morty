import React from 'react'

const Search = ({search,searchInput,handleSearch}) => {
    return (
        <section>
            <input type="text" ref={searchInput} onChange={handleSearch} value={search} />
        </section>
    )
}

export default Search