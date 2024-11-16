import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(1)
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    if (count > 10){
      setCount(1)
      return
    }

    fetch(``)
    .then((res) => res.json())
    .then((data) => setCurrentUser(data))
    .catch((err) => console.warn(err))
  })

  return (
    <>
    <h1>
  <button  onClick={()=> setCount(count+1)}>{count}</button>
  </h1>
    </>
  )
}

export default App
