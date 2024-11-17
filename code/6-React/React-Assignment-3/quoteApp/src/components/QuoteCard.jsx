const QuoteCard = ({ quoteData, tagName }) => {

  const { quote, author, id } = quoteData;

  const styles = {
    fontSize: quote?.length < 120 ? '1.5rem' : '1.1rem',
    textAlign: 'center'
  };

  return (
    <> 
      <div className="quote-card">
        <div className="tag">
          <span>{id ? `#${id}` : ''}</span>
          <span>{`#${tagName}`}</span>
        </div>
        <h3 style={styles}>
          {quote ? `"${quote}"` : 'No Quote Found'}
        </h3>
        <hr />
        <h5>{author || ''}</h5>
      </div> 
    </>
  )
};

export default QuoteCard;




















