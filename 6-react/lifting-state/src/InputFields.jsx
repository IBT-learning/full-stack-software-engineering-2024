import { useState } from "react"

function InputFields({ categories, content, setContent }) {
  const [name, setName] = useState("")
  const [type, setType] = useState("")

  const handleSubmit = (e) => {
    // construct new object
    const newItem = { name, type }
    // add to parent's content state array
    setContent([...content, newItem])
    // reset input field
    setName("")
  }

  const submitEnabled = type && name.trim().length > 0

  // let submitButton
  // if (submitEnabled) {
  //   submitButton = <button onClick={handleSubmit}>Submit</button>
  // } else {
  //   submitButton = (
  //     <button disabled onClick={handleSubmit}>
  //       Submit
  //     </button>
  //   )
  // }

  return (
    <>
      <input
        type="text"
        placeholder="type here..."
        // by calling the setter in the change event
        // and setting the state variable as the value for the input
        // we have implemented "two way binding"
        // meaning the input field and the state can change each other
        onChange={(e) => {
          setName(e.target.value)
        }}
        value={name}
      />
      {categories.map((c) => (
        <li key={c}>
          <input
            type="radio"
            name="category"
            id={c}
            // this is not two way binding
            // because c is not a state variable
            // changing the state cannot change the value of the input
            value={c}
            onChange={(e) => setType(e.target.value)}
          />
          <span>{c}</span>
        </li>
      ))}
      <button disabled={!submitEnabled} onClick={handleSubmit}>
        Submit
      </button>
    </>
  )
}

export default InputFields
