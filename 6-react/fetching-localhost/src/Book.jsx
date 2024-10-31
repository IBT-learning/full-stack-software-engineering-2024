function Book({ book }) {
  return (
    <div className="book-card">
      <h4>{book.title}</h4>
      <h5>{book.author}</h5>
    </div>
  )
}

export default Book
