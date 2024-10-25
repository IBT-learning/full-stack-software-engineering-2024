import { useState } from 'react'
import './App.css'
import MoodBoard from './MoodBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MoodBoard name ="Rea"/>
    <MoodBoard name="Ani" />
    <MoodBoard name="Ayo" />
  </div>
  )
}

export default App
