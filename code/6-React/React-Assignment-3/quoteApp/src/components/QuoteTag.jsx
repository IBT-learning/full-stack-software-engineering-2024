import React from 'react'

const QuoteTag = ({ darkMode,isError,selectedTag,handleClick }) => {

  const tagList = selectedTag.split(",");
   
   const style= {
    background: darkMode ? "#a593931c": "#f0f8ffde", 
    color: darkMode ? "#f0f8ffde": "#302e2ecc",
    transition: "1s"} 
   
  return (
    <>
     <div className='tagname'>
         {isError && 
         <p style={{color: "red", textAlign: "center", margin: "0 auto"}}>
           {`Error Encountered: ${isError}`}
           </p>}
         {selectedTag && !isError &&
          tagList.map((tagname, index) => 
          <button
            style={style}
            key={index} 
            onClick={() => handleClick(index)}
            >{`#${tagname}`.toUpperCase()}</button>)
         }
         </div>
    </>
  )
}

export default QuoteTag