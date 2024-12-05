/* 
    ? Using State in React
    state variables are ones that react keeps track of
    within a component, within a session

    initialized with useState()

    useState(param) returns an array with two elements
    0: the param (the initial value of the state variable)
    1: a function object that updates the state variable
*/

import { useState } from "react"
import "./Counter.css"

function Counter({ startVal, interval }) {
  const [count, setCount] = useState(startVal)

  const decrement = () => {
    setCount(count - interval)
    console.log(count)
  }

  return (
    <div className="counter-component">
      <button onClick={decrement}>-</button>
      {/* count will update automatically IF count is a state variable */}
      <span>{count}</span>
      {/* we can pass named or anonymous function objects to our event listeners */}
      <button onClick={() => setCount(count + interval)}>+</button>
    </div>
  )
}

export default Counter
