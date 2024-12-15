import Counter from './counter'
import './App.css'

function App() {

  return (
    <>
    <div className='counter'>
     <Counter startVal={0} interval = {1}/>
     <Counter startVal = {1} interval = {2}/>
     <Counter startVal = {-1} interval = {2}/>
     <Counter startVal = {5} interval = {5}/>
     </div>
    </>
  )
}

export default App
