import React from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import SelectTag from "./SelectTag";

const Header = ({ 
      darkMode,availableTags,handleChange, 
      SelectedTag,handleDarkMode,handleLightMode,
  }) => {

  return (
    <>
    <header className="header">
      <h1>Quotes<span>generator</span></h1>
      <SelectTag  
         availableTags={availableTags}
         handleChange={handleChange} 
         SelectTag={SelectedTag}
         darkMode={darkMode} 
         />
      <div className="theme-container"
      style={{
        background: darkMode ? "#302e2ecc": "#e9e1e1bb",
        transition: "1s"}}>
       <FaMoon 
          style={{color: darkMode ? "#f0f8ffde": "#302e2ecc"}}  
          onClick={handleDarkMode}/> 
       <FaSun 
          style={{color: darkMode ? "#f0f8ffde": "#302e2ecc"}} 
          onClick={handleLightMode}/>
      </div>
    </header>
    </>
  );
};

export default Header;
