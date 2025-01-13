import { useState } from "react"
import "./App.css"
import InputFields from "./InputFields"
import ContentBox from "./ContentBox"

function App() {
  // These things need to be in the App/parent component
  // because all of the child components will need to access the same data
  const categories = ["mammal", "bird", "fish", "reptile", "insect"]
  const [content, setContent] = useState([])

  return (
    <>
      <InputFields
        categories={categories}
        content={content}
        setContent={setContent}
      />
      <div className="category-wrapper">
        {categories.map((c) => (
          <ContentBox
            key={c}
            title={c}
            content={content}
            setContent={setContent}
            contentList={content.filter((item) => item.type === c)}
          />
        ))}
      </div>
    </>
  )
}

export default App
