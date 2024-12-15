import './App.css'
import TopicBoard from './TopicBoard'

function App() {
  const classTitle = "Full Stack Software Engineering"
  

  return(
    <div>
      <h1>{classTitle} </h1>
      
      <h3>Beginning of react</h3>
      <TopicBoard />
    </div>
  )
}

export default App
