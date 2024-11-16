import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const[tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('')
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch(`https://quoteslate.vercel.app/api/tags`)
    .then((res) => res.json())
    .then((data) => setTags(data))
    .catch((err) => console.warn(err))
  }, [tags]);

  return (
    <>
    <div className="Quote-App">
      <h1>Random Quotes</h1>
      <select onChange={(e) => setSelectedTag(e.target.value)}
      value={selectedTag}
      >
        <option value="">Select a tag</option>
        {tags.map((tag, index) =>(
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
    </>
  )
}

export default App
