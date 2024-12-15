import "./Counter.css"
import { useState } from 'react'

function Counter({startVal, interval}) {
    const [count, setCount] = useState(startVal)
    const increment = () => {
        setCount(count + interval)
        console.log(count)
    }
    const decrement = () => {
        setCount(count - interval)
        console.log(count)
    }
    return <>
        <div className='count-component'>
       <button onClick = {increment}>+</button>
       <span> {count} </span>
       <button onClick={decrement}>-</button>
       </div>
    </>
}
export default Counter