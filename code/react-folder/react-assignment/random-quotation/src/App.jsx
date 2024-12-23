import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [quotes, setQuotes] = useState({})
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState(null)
  const [choices, setChoices] = useState([])
  const [prevChoice, setPrevChoice] = useState([])
  const [FetchTrigger, setFetchTrigger] = useState(0)

  const handleClick = () => {
    if (choices.length > 0) {
      const joinedChoices = choices.join(','); // Join choices with comma for API request
      setSelectedTag(joinedChoices); // Set selected tag for API request with comma separated values
      setPrevChoice(choices); // Save previous choices
      setChoices([])// Clear choices after submission
      setFetchTrigger(Math.random()); // Trigger re-fetch
    } else if(prevChoice.length > 0) {
      // Use previous choices if no new choices are selected
      // const joinedPrevChoices = prevChoice.join(',');
      // setSelectedTag(joinedPrevChoices); // Use previous choices if no new choices are selected
      setFetchTrigger(Math.random()); // Trigger re-fetch
    } else {
      alert('Please select at least one tag.');
    }
  };


  const handleSelect = (e) => {
    let value = e.target.value;
      // Avoid duplicate selections
      if (!choices.includes(value) && value) {
        setChoices((prevChoices) => [...prevChoices, value]); // Add new tag to choices
        setPrevChoice([]); // Clear previous choices if new choice is selected
      }
  };



  useEffect(() => {
    fetch('https://quoteslate.vercel.app/api/tags')
      .then(res => res.json())
      .then(data => {
        setTags(data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`)
      .then(res => res.json())
      .then(data => {
        setQuotes(data)
      })
      .catch(err => console.log(err))
    }
  }, [selectedTag, FetchTrigger]);

  return (
    <>
    <div className='container'>
    {selectedTag && ( quotes.quote ? 
        <div className='quote'>{quotes.quote}</div>
      : <div className='quote'>No Quote available for Tags:{selectedTag.split(',').join(', ')}</div>)}
      <div>Selected Tag(s):{choices.length > 0 ? choices.join(', ') : prevChoice.join(', ')}</div>
      <h1>Random Quotation Generator</h1>
      {/* <label htmlFor="tags">Select a Tag or Multiple Tags</label>
      <select 
        name="tag" 
        id="tags" 
        onChange={handleSelect}
      >
        <option value="">Select Tag</option>
        {tags.length > 0 && 
          tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select> */}
      <div id='tag-buttons-container'>
        {tags.length > 0 && 
          tags.map((tag) => (
            <button id='tag-buttons' key={tag} onClick={handleSelect} value={tag}>
              {tag}
            </button>
        ))}
      </div>

      <button className="get-quote-button"onClick={handleClick}>Get Quote</button>
      {/* {quotes.tags && (
        <div>Tags: {quotes.tags.join(', ')}</div>
      )} */}
    </div>
    </>
  )
}

export default App
