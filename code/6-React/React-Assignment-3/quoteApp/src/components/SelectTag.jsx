import React from "react";

const SelectTag = ({ darkMode, availableTags, handleChange }) => {
   
  return (
    <>
        <div className='select-container'>
            <label htmlFor="tags">Tag: </label>
            <select 
              multiple={true} 
              name="tags" 
              id="tags"  
              onChange={handleChange}
              style={{
              background: darkMode ? "#302e2ecc": "#e9e1e1bb",
              color: darkMode ? "#f0f8ffde": "#302e2ecc", 
              transition: "1s"}}>
            {availableTags.map((tag, index) => (
                <option key={index} value={tag}>{tag}</option>
            ))}
            </select>
        </div>
    </>
  )
}

export default SelectTag