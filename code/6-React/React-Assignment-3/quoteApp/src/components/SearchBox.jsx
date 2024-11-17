import React from "react";

const SearchBox = ({ 
      darkMode, search, setSearch, 
      searchResult, handleClickAuthor 
}) => {
 
  return (
    <>
      <form className='search-box' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search"></label>
        <input 
        style= {{
              background: darkMode ? "#302e2ecc": "#e9e1e1bb", 
              color: darkMode ? "#f0f8ffde": "#302e2ecc",
              transition: "1s",
              }}
          type="search" 
          id="search"
          required
          placeholder='Search Authors here...'
          value={search}
          onChange={(e) => setSearch((e.target.value).toLowerCase())}
           />
      </form>
      
      {searchResult && search &&
      <ul className='author-list'
      style= {{
        background: darkMode ? "": "#474040f1",
        transition: "2s"}}>
        {searchResult.map((author, i) => (
         <>
         <li 
            key={author} 
            onClick={() => handleClickAuthor(i)}>
              {author}
            </li>
         </>))}
      </ul>}
    </>
  )
}

export default SearchBox