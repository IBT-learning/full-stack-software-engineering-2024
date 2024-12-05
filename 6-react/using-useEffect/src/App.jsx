/* 
? useEffect

useEffect is for handling "side effects"
it's a function we call, it doesn't return anything 

most common side effect: making API calls

two arguments: 
* a function object (callback)
    * this function runs when the effect is called for
* an array of dependencies
    * none (default) - the function runs once per render of the component
        (and the component may render often, 
        so avoid this option unless you really want that!) 
    * [] - it runs once when the components mounts
    * [dependency1, dependency2, etc] - runs when a dependency changes
*/

import { useState, useEffect } from "react"
import "./App.css"
import Post from "./Post"

function App() {
  const [count, setCount] = useState(1)
  const [currentUser, setCurrentUser] = useState({})
  const [posts, setPosts] = useState([])
  const [selectedPostId, setSelectedPostId] = useState(0)

  useEffect(() => {
    if (count > 10) {
      setCount(1)
      // the return will end this function call
      // so the fetches below won't happen on this round
      return
    }

    // here we are making multiple fetches inside the useEffect function
    // meaning these will happen every time the effect is called
    // (which happens when the dependencies update, in this case,
    // clicking the button to update count )
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) => setCurrentUser(data))
      .catch((err) => console.warn(err))

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${count}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.warn(err))
  }, [count])
  // because count is listed as a dependency, the component will re-render
  // every time the value of count changes

  return (
    <>
      <h1>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        {currentUser.name}
      </h1>

      <div className="posts-wrapper">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            selectedPostId={selectedPostId}
            setSelectedPostId={setSelectedPostId}
          />
        ))}
      </div>
    </>
  )
}

export default App
