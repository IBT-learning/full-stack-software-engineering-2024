import React from 'react'

const QuoteTag = ({ darkMode, isError, selectedTag, randomQuote, handleClick }) => {
  return (
    <div className='tagname'>
        {isError && 
        <p style={{color: "red", textAlign: "center", margin: "0 auto"}}>
          {`Error Encountered: ${isError}`}
          </p>}
        {selectedTag && !isError &&
         (randomQuote.tags).map((tagname, index) => 
         <button
           style={{
            background: darkMode ? "#a593931c": "#f0f8ffde", 
            color: darkMode ? "#f0f8ffde": "#302e2ecc",
            transition: "1s"}} 
           key={index} 
           onClick={() => handleClick(index)}
           >{(tagname).toUpperCase()}</button>)
        }
        </div>
  )
}

export default QuoteTag