import { useState } from "react";

function InputFields({categories, content, setContent}){
    const [name, setName] = useState("")
    const [type, setType] = useState("")
}

const handleSubmit = (e) =>{
    //new object
    const newItem = { name, type }
    setContent([...content, newItem])
    //make input field blank
    setName("")
}

return(
    <>
    <input type= "text" placeholder="type here..."
    onChange={(e) =>{
        setName(e.target.value)
    }} 
    value={name} />
    {categories.map((c)=> (
        <li key={c}>
            <input 
            type="radio" 
            name="category" 
            id={c}
            value={c}
            onChange={(e) => setType(e.target.value)}
            />
        </li>
    ))}
       <button onClick={handleSubmit}>Submit</button>
    </>
 
)
export default InputFields