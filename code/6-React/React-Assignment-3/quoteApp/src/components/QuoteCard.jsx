import React from 'react'

const QuoteCard = ({ selectedTag, randomQuote, tagName }) => {
  return (
    <div className='quote-card'>
            <h2>Quote</h2>
            <div className='tag'>
            <span>{`#${randomQuote.id}`}</span>
            <span>#{tagName ? tagName : selectedTag}
              </span>
            </div>
            <h3 style={(randomQuote.quote).length < 120 ? 
                {fontSize: "1.8rem", textAlign: "center"} : 
                {fontSize: "1.3rem", textAlign: "center"}}>
                    "{randomQuote.quote}"
                </h3>
            <h5>{randomQuote.author}</h5>
        </div>
  )
}

export default QuoteCard