<<<<<<< HEAD
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"
=======
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
>>>>>>> e531b511898fd93ba899bddd5838b5d71313dfe9

function Books() {
  const [books, setBooks] = useState([])

<<<<<<< HEAD
  const { token } = useContext(UserContext)

  useEffect(() => {
    // because this endpoint requires user authentication
    // we must include the token under the "authorization" header
    // we'll only even attempt to hit this enpoint if there's a token
    if (token) {
      fetch("http://localhost:4000/books/", {
        headers: {
          authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((err) => console.error(err))
    }
  }, [token])

  if (token) {
    return (
      <>
        <div id="books-wrapper">
          {books.map((b) => (
            <Link key={b._id} to={b._id}>
              <div className="book">
                <div className="book-title">{b.title}</div>
                <div className="author">{b.author}</div>
              </div>
            </Link>
          ))}
        </div>
      </>
    )
  } else {
    return <></>
  }
}

export default Books
=======
  useEffect(() => {
    fetch("http://localhost:4000/books/")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div id="books-wrapper">
        {books.map((b) => (
          <Link key={b._id} to={b._id}>
            <div className="book">
              <div className="book-title">{b.title}</div>
              <div className="author">{b.author}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Books

// import { useState } from "react"

// function Books() {
//   console.log(document.cookie)

//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")

//   const handleLogin = () => {
//     fetch("http://localhost:4000/auth/login", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data))
//       .catch((err) => console.error(err))
//   }

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="username"
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Log In</button>
//     </>
//   )
// }

// export default Books
>>>>>>> e531b511898fd93ba899bddd5838b5d71313dfe9
