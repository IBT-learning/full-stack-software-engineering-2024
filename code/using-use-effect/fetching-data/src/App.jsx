import React, { useState, useEffect } from "react";
import "./App.css";
import "./api.js"
import TagSelect from "./TagSelect.jsx";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  // Fetch tags on component mount
  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tags");
        return res.json();
      })
      .then((data) => setTags(data))
      .catch((err) => setError(err.message));
  }, []);

  // Fetch a random quote when a tag is selected
  useEffect(() => {
    if (!selectedTag) return;

    setError(null);
    fetch(`https://quoteslate.vercel.app/api/quotes/random?tag=${selectedTag}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch quote");
        return res.json();
      })
      .then((data) => setQuote(data))
      .catch((err) => setError(err.message));
  }, [selectedTag]);

  // Handle tag selection
  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  return (
    <div className="app">
      <h1>Random Quote Generator</h1>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Tag Selection Dropdown */}
      <select onChange={handleTagChange} value={selectedTag}>
        <option value="">Select a tag</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* Display Quote */}
      {quote && (
        <div className="quote">
          <p>"{quote.text}"</p>
          <p>
            <i>- {quote.author || "Unknown"}</i>
          </p>
        </div>
      )}
    </div>
  );
}

 
export default App;
