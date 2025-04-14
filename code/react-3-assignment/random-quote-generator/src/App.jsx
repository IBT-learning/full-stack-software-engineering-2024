import { useState, useEffect } from 'react'
import './App.css'

import Quotes from './Quotes/Quotes'
import './Quotes/Quotes.css'



function App() {
  const [quoteTags, setQuoteTags] = useState([""])
  const [selectedTag, setSelectedTag] = useState("")
  const [quotesByTags, setQuotesByTags] = useState({ tags: [] })

  useEffect(() => {
    fetch("https://quoteslate.vercel.app/api/tags")
    .then((res) => res.json())
    .then((quotes) => setQuoteTags(quotes))
  }, [])

  const handleSelectedTag = (e) => {
    const newTagValue = e.target.value
    setSelectedTag(newTagValue)    
  }

  useEffect(() => {
    fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
    .then((res) => res.json())
    .then((quote) => setQuotesByTags(quote))
  }, [selectedTag])
  

  return (
    <>
    <div className='app-container'>

    <h2 className='title'>QOUTES APP</h2>

    <div className='tags-container'>
      <label htmlFor="quotes">Get Quotes By Tags</label>
      <select 
      name="quote-tags" 
      id="quotes"
      onChange={handleSelectedTag}>
        {quoteTags.map((tag) =>
        <option
        className='tag'
        value={tag}
        key={tag}>
          {tag}
        </option>
      )}
      </select>
    </div>

    <Quotes
    quotesByTags={quotesByTags}
    selectedTag={selectedTag}
    />

    </div>
    </> 
    
  )
}

export default App
