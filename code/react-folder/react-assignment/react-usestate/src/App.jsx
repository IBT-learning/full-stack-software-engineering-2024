import './App.css'
import Emoji from './emoji.jsx'
function App() {
  const people = ["adam", "yusuf"]
  return (
    <>
    <Emoji person={people} />
    </>
  )
}

export default App
