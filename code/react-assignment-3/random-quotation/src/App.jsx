import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
; function App() { 
  const [tags, setTags] = useState([]); 
  const [selectedTag, setSelectedTag] = useState(''); 
  const [quote, setQuote] = useState('');

  useEffect(() => { fetch('https://quoteslate.vercel.app/api/tags') 
   .then(response => response.json()) 
   .then(data => setTags(data)) 
   .catch(error => console.error('Error fetching tags:', error)); }, []);; 

  useEffect(() => {
      if (selectedTag) {
        fetch(`https://quoteslate.vercel.app/api/quotes/random?tag=${selectedTag}`)
          .then(response => response.json())
          .then(data => setQuote(data.quote));
      }
    }, [selectedTag]);
    
    return ( <div> 
      <h1>Random Quotations</h1> 
      <select onChange={(e) => setSelectedTag(e.target.value)}> 
        {tags.map(tag => ( <option key={tag} value={tag}>{tag}</option> ))} 
      </select> 
        <p>{quote}</p>
         </div> ); }
export default App
