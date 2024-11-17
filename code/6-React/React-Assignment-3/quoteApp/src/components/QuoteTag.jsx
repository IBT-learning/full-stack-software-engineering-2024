import React from 'react'
import { useEffect } from 'react'

const QuoteTag = ({ 
      darkMode,isError,selectedTag,tagName,
      handleClick,setRandomQuote,setIsError 
  }) => {
   
  const API_URL2 =  "https://quoteslate.vercel.app/api/quotes/random";
  
  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        if (!selectedTag) return;
          const response = await fetch (`${API_URL2}?tags=${tagName}`);
          if (!response.ok) throw new Error("Please try again");
          const data = await response.json();
          setRandomQuote(data);
          setIsError(false);
        } catch (error) {
          setIsError(error.message);
        }
      }
      setRandomQuote("");
      
      fetchRandomQuote();
    }, [tagName])

  const tagList = selectedTag.split(",");
   
   const style= {
    background: darkMode ? "#a593931c": "#e9e1e1bb", 
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