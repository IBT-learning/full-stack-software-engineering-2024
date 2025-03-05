import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [quote, setQuote] = useState('');
  const [loadingTags, setLoadingTags] = useState(true);
  const [loadingQuote, setLoadingQuote] = useState(false);
  const [error, setError] = useState('');

  // Fetch available tags when the app loads
  useEffect(() => {
    fetch('https://quoteslate.vercel.app/api/tags')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched tags data:', data); // Log the fetched data
        if (data && Array.isArray(data)) {
          setTags(data);
        } else {
          console.error('Tags data is not in the expected format:', data);
          setError('Failed to fetch tags.');
        }
        setLoadingTags(false);
      })
      .catch((err) => {
        console.error('Error fetching tags:', err);
        setError('Failed to fetch tags.');
        setLoadingTags(false);
      });
  }, []);

  // Fetch a quote whenever a new tag is selected
  useEffect(() => {
    if (selectedTag) {
      setLoadingQuote(true);
      fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          console.log('Fetched quote data:', data); // Log the fetched data
          if (data && data.length > 0) {
            setQuote(data.quote);
          } else {
            setQuote('No quotes found for this tag.');
          }
          setLoadingQuote(false);
        })
        .catch((err) => {
          console.error('Error fetching quote:', err);
          setError('Failed to fetch quote.');
          setLoadingQuote(false);
        });
    }
  }, [selectedTag]);

  return (
    <div className="app">
      <h1>Random Quotes by Topic</h1>
      <div className="select-container">
        <label htmlFor="tags">Select a topic:</label>
        {loadingTags ? (
          <p>Loading tags...</p>
        ) : (
          <select
            id="tags"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">- Select a tag -</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        )}
      </div>
      {loadingQuote ? (
        <p>Loading quote...</p>
      ) : (
        quote && (
          <div className="quote-container">
            <p>{quote}</p>
          </div>
        )
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;