<<<<<<< HEAD
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../App"
=======
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
>>>>>>> e531b511898fd93ba899bddd5838b5d71313dfe9

function BookDetail() {
  const [book, setBook] = useState({})

<<<<<<< HEAD
  const { token } = useContext(UserContext)

=======
>>>>>>> e531b511898fd93ba899bddd5838b5d71313dfe9
  // useParams is a hook provided by React Router
  // it pulls all url params into a JS object we can destructure
  const { id: bookId } = useParams()
  const url = `http://localhost:4000/books/find/${bookId}`

  useEffect(() => {
<<<<<<< HEAD
    fetch(url, {
      headers: {
        authorization: token,
      },
    })
=======
    fetch(url)
>>>>>>> e531b511898fd93ba899bddd5838b5d71313dfe9
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia ipsa,
        corporis id officia incidunt nisi rem dignissimos possimus totam cum
        perferendis, eius, et odio porro iusto! Quas temporibus neque dolorum.
      </p>
    </>
  )
}

export default BookDetail
