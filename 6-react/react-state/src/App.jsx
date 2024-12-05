import Counter from "./Counter"

function App() {
  return (
    <>
      <Counter startVal={0} interval={1} />
      <Counter startVal={3} interval={3} />
    </>
  )
}

export default App
