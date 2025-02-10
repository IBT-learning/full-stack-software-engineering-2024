import { useEffect, useState } from "react"
import "./App.css"

import Book from "./Book"

function App() {
  const [books, setBooks] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")

  useEffect(() => {
    // clear out the old books before fetching the new ones from the API
    setBooks([])

    // we know this fetch will fail without a token
    // so we might as well only attempt it
    // if there's already a token saved
    if (token) {
      fetch("http://localhost:4000/books/", {
        method: "GET",
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((err) => console.warn("fetch failed"))
    }
  }, [token])
  // because token is a dependency, the useEffect will run
  // every time there's a change to token

  const handleLogin = () => {
    // fetch can also happen in functions other than useEffect!
    // they will happen whenever they are triggered by an event
    fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token))
      .then((err) => console.warn(err))
  }

  let authButton
  if (token) {
    // note: this didn't work during the demo because I forgot to
    // give the event listener a callback!
    authButton = <button onClick={() => setToken("")}>Log Out</button>
  } else {
    authButton = (
      <>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
      </>
    )
  }

  return (
    <>
      {authButton}
      <hr />
      <div id="books-wrapper">
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </>
  )
}

export default App
