import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../App"

function Books() {
  const [books, setBooks] = useState([])

  const { token } = useContext(UserContext)

  useEffect(() => {
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
