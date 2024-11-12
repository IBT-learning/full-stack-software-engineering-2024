import React from 'react';

function QuoteList({ quote }) {
  return (
    <div className="quote-List">
      {quote && (
        <p>"{quote}"</p>
      )}
    </div>
  );
}

export default QuoteList;
