import { useState } from "react";

function InputFieldsDraft(){
    const categories = ["important", "normal", "low priority"]
    
    return(
        <>
        <input type="text"/>
        {categories.map((c) =>(
            <>
            <input type="radio" name="category" id={c} key={c} value={c} />
            <span>{c}</span>
            </>
        ))}
        </>
    )
}
export default InputFieldsDraft