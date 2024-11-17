import './index.css';
import Header from './components/Header';
import QuoteTag from './components/QuoteTag';
import SearchBox from './components/SearchBox';
import InputField from './components/InputField';
import QuoteCard from './components/QuoteCard';

import React from 'react';
import { useState, useEffect } from 'react';

function App() {

  const [selectedTag, setSelectedTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [isError, setIsError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [tagName, setTagName] = useState("");
  const [count, setCount] = useState(0);
  const [multipleQuotes, setMultipleQuotes] = useState([]);
  const [search, setSearch] = useState("");
  const [authorsList, setAuthorsList] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [authorName, setAuthorName] = useState("");
 
  const API_URL1 = "https://quoteslate.vercel.app/api/tags";
  const API_URL2 =  "https://quoteslate.vercel.app/api/quotes/random";
  const API_URL3 = 'https://quoteslate.vercel.app/api/authors';
  const API_URL4 = "https://quoteslate.vercel.app/api/quotes/random"

  
  useEffect(() => {

    const fetchTags = async () => {

      try {
        const response = await fetch(`${API_URL1}`);
        if (!response.ok) throw new Error("Please try again");
        const data = await response.json();
        setAvailableTags(data);
        setIsError(false);
      } catch (error) {
        setIsError(error.message);
      } 
    }
     
    fetchTags();
  }, [])

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        if (!selectedTag) return;
          const response = await fetch 
          (`${API_URL2}?tags=${selectedTag}`);
          if (!response.ok) throw new Error("Please try again");
          const data = await response.json();
          setRandomQuote(data);
          setIsError(false);
      } catch (error) {
        setIsError(error.message);
      }
    }
    setRandomQuote('');
    fetchRandomQuote();
}, [selectedTag])

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        if (count) {
            const response = await fetch (`${API_URL2}?count=${count}`);
            if (!response.ok) throw new Error("Please try again");
            const data = await response.json();
            setMultipleQuotes(data);
            setIsError(false);
          }
        if (count && selectedTag) {
            const response = await fetch 
            (`${API_URL2}?tags=${selectedTag}&count=${count}`);
            if (!response.ok) throw new Error("Please try again");
            const data = await response.json();
            setMultipleQuotes(data);
            setIsError(false);
          }
      } catch (error) {
        setIsError(error.message);
      }
    }
    setCount("");
    setMultipleQuotes("");
    setAuthorName("");
    fetchRandomQuote();
  }, [selectedTag, count])

  useEffect(() => {
    const fetchAuthorsApi = async () => {
        try {
          if (!authorName) {
            const response = await fetch(API_URL3);
            if (!response.ok) throw new Error("Error fetching data");
            const data = await response.json();
            setAuthorsList(data);
          }
        if (authorName) {
            const response = await fetch(`${API_URL4}?authors=${encodeURIComponent(authorName)}`);
            if (!response.ok) throw new Error("Error fetching data")
            const data = await response.json();
            setRandomQuote(data);
            setIsError(false)
        } 
        } catch (error) {
          console.log(`${error.message}`);
          setIsError(error.message)
        }
    }
    setMultipleQuotes("");

    fetchAuthorsApi();
  }, [authorName])

  useEffect(() => {
    const authors = Object.keys(authorsList).map((key) => key);
    const result = authors.filter((author) => 
        author.toLowerCase().includes(search))
        setSearchResult(result);
  }, [search, authorsList])

  const handleDarkMode = () => {
    setDarkMode(true)
 }

 const handleLightMode = () => {
   setDarkMode(false)
 }

  const handleChange = (e) => {
    const multipleTags = [];
    for (let i = 0; i < e.target.selectedOptions.length; i++) {
      multipleTags.push(e.target.selectedOptions[i].value);
      const selectedValues = multipleTags.join(',');
      setSelectedTag(selectedValues);
   }
 }

const handleClick = (index) => {
   const tagname = randomQuote.tags[index];
   setTagName(tagname);
 }

 const handleClickAuthor = (index) => {
     const name = searchResult[index];
     setAuthorName(name);
 }

  return ( 
  <>
    <div className='wrapper'
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

       <section className='input-container'>
          <InputField
          darkMode={darkMode} 
          count={count}
          setCount={setCount}
          />
          <SearchBox
          darkMode={darkMode}
          search={search}
          setSearch={setSearch}
          searchResult={searchResult}
          handleClickAuthor={handleClickAuthor} />
        </section>

        <QuoteTag 
          isError={isError} 
          selectedTag={selectedTag}
          tagName={tagName}
          randomQuote={randomQuote}
          darkMode={darkMode}
          handleClick={handleClick}
          setIsError={setIsError}
          setRandomQuote={setRandomQuote}
        />

  <main style= {{
        background: darkMode ? "#302e2ecc": "#e9e1e1bb", 
        color: darkMode ? "#f0f8ffde": "#302e2ecc",
        transition: "1s",
    }}>
  {!selectedTag && !authorName && !count ?
    (<p className="user-message">
        Pls select a tag to get your favourite quote(s) here.<br/>
        PS: Hold down the ctrl key(on window) and cmd key(on mac) 
        to select multiple tags.
      </p>) : ""}
  
    {randomQuote &&
       <QuoteCard quoteData={randomQuote} tagName={selectedTag} />}

    {multipleQuotes?.length > 1 &&  
      multipleQuotes.slice(1).map((quote) => (
            <QuoteCard 
              key={quote.id} 
              quoteData={quote} 
              tagName={selectedTag} />
          ))}
    </main>
    </div>
   </>
  )
}

export default App
