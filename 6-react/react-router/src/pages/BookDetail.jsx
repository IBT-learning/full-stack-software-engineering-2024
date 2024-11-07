import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function BookDetail() {
  const [book, setBook] = useState({})

  const { id: bookId } = useParams()
  const url = `http://localhost:4000/books/find/${bookId}`

  console.log(url)

  useEffect(() => {
    fetch(url)
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
