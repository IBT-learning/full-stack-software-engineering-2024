import { useState } from "react";

const InputField = ({ darkMode, setCount }) => {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault();
     if (inputValue <=1 || inputValue > 10) return;
     setCount(inputValue);
     setInputValue('');
  }

  return (
     <>
     <form className="count-input" onSubmit={handleSubmit}>
        <label htmlFor="multiple"></label>
        <input style= {{
              background: darkMode ? "#302e2ecc": "#e9e1e1bb", 
              color: darkMode ? "#f0f8ffde": "#302e2ecc",
              transition: "1s",
              }}
          type="number" 
          id='multiple'  
          placeholder='Enter number of quotes here....'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
   </>
  )
}

export default InputField