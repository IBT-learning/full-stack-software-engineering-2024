import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const [tags, setTags] =useState([])
  const [selectedTags, setSelectedTags]= useState("")
  const [quote, setQuote] =useState("")

  useEffect(() => {
    fetch('https://quoteslate.vercel.app/api/tags')
    .then((res) => res.json())
    .then((data) => setTags((data)))
  },[])

  useEffect(()=> {
    fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTags}`)
    .then((res) => res.json())
    .then((data) => setQuote(data.quote))
  },[selectedTags])

  return (
    <>
      <div className='container'>
        <h1>Random Quotes About:  </h1>
        <select 
        className='select'
        name="tag-select" 
        value={selectedTags}
        onChange={(e) => setSelectedTags(e.target.value)}>
          
          <option value="">--Select a tag--</option>
            {tags.map((tag, index) => (
              <option
              value={tag} 
              key={index}
              >
                {tag}</option>
            ))}
    
        </select>
      </div>
     <div className='quote'>
      "{quote}"
      
      </div> 
      
    </>
  )
}

export default App
