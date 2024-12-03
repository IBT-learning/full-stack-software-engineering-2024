import React, { useState, useEffect } from 'react';
import TagSelector from './components/TagSelector';
import QuoteList from './components/QuoteList';
import './index.css';

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [quote, setQuote] = useState('');

  // Fetch tags once on component load
  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
      .then(response => response.json())
      .then(data => setTags(data))
      .catch(error => console.error("Error fetching tags:", error));
  }, []);

  // Fetch quote by selected tag
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
        .then(response => response.json())
        .then(data => setQuote(data.quote || "No quotes found."))
        .catch(error => console.error("Error fetching quote:", error));
    }
  }, [selectedTag]);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <TagSelector tags={tags} setSelectedTag={setSelectedTag} />
      <QuoteList quote={quote} />
    </div>
  );
}

export default App;
