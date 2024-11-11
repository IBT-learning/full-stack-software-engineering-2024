import './index.css';
import Header from './components/Header';

import { useState, useEffect } from 'react';
import QuoteTag from './components/QuoteTag';
import QuoteCard from './components/QuoteCard';

function App() {

  const [selectedTag, setSelectedTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [isError, setIsError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [tagName, setTagName] = useState("");

  useEffect(() => {

    const fetchTags = async () => {

      try {
        const response = await fetch("https://quoteslate.vercel.app/api/tags");
        if (!response.ok) throw new Error("Please try again");
        const data = await response.json();
        setAvailableTags(data);
        setIsError(false);
      } catch (error) {
        setIsError(error.message);
      } 
    }
     
    fetchTags()
  }, [])

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch 
        (`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}`);
        if (!response.ok) throw new Error("Please try again");
        const data = await response.json();
        setRandomQuote(data);
        setIsError(false);
      } catch (error) {
        setIsError(error.message);
      }
    }

    fetchRandomQuote()
     
  }, [selectedTag, tagName])

 const handleDarkMode = () => {
    setDarkMode(true)
 }

 const handleLightMode = () => {
   setDarkMode(false)
 }

const handleChange = (e) => {
   setSelectedTag(e.target.value);
 }

const handleClick = (index) => {
   const tagname = randomQuote.tags[index];
   setTagName(tagname);
 }

  return (
  <>
    <div
      className='wrapper'
      style={{
        background: darkMode ? "#0c0c0ce3": "#f7f2f2",
        transition: "1.0s"}}>
        <Header
         darkMode={darkMode}
         availableTags={availableTags}
         selectedTag={selectedTag}
         handleChange={handleChange}
         handleDarkMode={handleDarkMode}
         handleLightMode={handleLightMode}
        />
      
        <QuoteTag 
         isError={isError} 
         selectedTag={selectedTag}
         randomQuote={randomQuote}
         darkMode={darkMode}
         handleClick={handleClick}/>

        <main style={{
              background: darkMode ? "#302e2ecc": "#f0f8ffde", 
              color: darkMode ? "#f0f8ffde": "#302e2ecc",
              transition: "1s"}}>
          {availableTags && !selectedTag && 
          <h4 style=
              {{fontSize: "1.5rem", margin: "auto", 
              textAlign: "center", 
              padding: "0 5px"}}>
                  Pls select a tag to get your favourite quote here
            </h4>}
            {selectedTag &&
              <QuoteCard 
              selectedTag={selectedTag} 
              randomQuote={randomQuote} 
              tagName={tagName}
              />}
          </main>
      </div>
   </>
  )
}

export default App
