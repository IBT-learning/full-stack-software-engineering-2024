import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tags, setTags] = useState([]); 
  const [selectedTag, setSelectedTag] = useState(""); 
  const [quote, setQuote] = useState(""); 

  // Fetch tags 
  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tags");
        }
        return response.json();
      })
      .then((data) => setTags(data))
      .catch((error) => console.error("Error fetching tags:", error));
  }, []); 

  // Fetch a quote when a tag is selected
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch quote");
          }
          return response.json();
        })
        .then((data) => {
          console.log("quote fetched:", data.quote);
          setQuote(data.quote)
    })
        .catch((error) => console.error("Error fetching quote:", error));
    }
  }, [selectedTag]); 

  return (
    <div className="Quote-App">
      <h1>Random Quotes</h1>

      {/* Dropdown*/}
      <select
        onChange={(e) => setSelectedTag(e.target.value)}
        value={selectedTag}
      >
        <option value="">Select a tag</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {/* Display quote */}
      {quote && (
        <div>
          <h3>Quote:</h3>
          <p>"{quote}"</p>
        </div>
      )}
    </div>
  );
}

export default App;
