import { useState } from "react";

const InputField = ({ setCount }) => {

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
        <input 
          type="number" 
          id='multiple'  
          placeholder='Type number of quotes here...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
   </>
  )
}

export default InputField