import { useState } from 'react'
import './App.css'
import MoodSelector from './MoodSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>MoodBoard</h1>
        <MoodSelector />
      </div>
    </>
  )
}

export default App
