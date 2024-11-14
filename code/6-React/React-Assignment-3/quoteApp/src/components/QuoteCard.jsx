import React, { useState } from 'react';

const QuoteCard = ({ quoteData, tagName }) => {

  const { quote, author, id } = quoteData;

  const styles = {
    fontSize: quote?.length < 120 ? '1.8rem' : '1.3rem',
    textAlign: 'center'
  };

  return (
    <> 
      <div className="quote-card">
        <div className="tag">
          <span>{id ? `#${id}` : ''}</span>
          <span>{`${tagName}`}</span>
        </div>
        <h3 style={styles}>
          {quote ? `"${quote}"` : 'No Quote Found'}
        </h3>
        <hr />
        <h5>{author || ''}</h5>
      </div>
      
    </>
  );
};

export default QuoteCard;




















// import React from 'react'

// const QuoteCard = ({ QuoteCard, randomQuote, tagName }) => {

//   return ( 
//         <>
//           <div className='quote-card'>
//               <h2>Quote</h2>
//               <div className='tag'>
//               <span>{QuoteCard ? `${QuoteCard.id}` : `#${randomQuote.id}`}</span>
//               <span>#{tagName ? tagName : ""}
//                 </span>
//               </div>.
//               <h3 style={(randomQuote.quote).length < 120 || (QuoteCard.quote).length < 120 ? 
//                   {fontSize: "1.8rem", textAlign: "center"} : 
//                   {fontSize: "1.3rem", textAlign: "center"}}>
//                       {QuoteCard ? `"${QuoteCard.quote}"`
//                       : `"${randomQuote.quote}"`}
//                   </h3>
//               <h5>{QuoteCard ? QuoteCard.author :  randomQuote.author}</h5>
//             </div>
//         </>
//   )
// }

// export default QuoteCard