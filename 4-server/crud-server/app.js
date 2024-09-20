import express from "express"
const app = express()
import fs from "fs"

const PORT = 4000
const BOOK_PATH = "./static/books.json"

/* 
  CRUD server / application
  * Create (POST)
  * Read (GET)
  * Update (PUT)
  * Delete (DELETE)
*/

// this middleware allows express to interpret request bodies as JSON
app.use(express.json())
// this middleware parses request payloads that are "url encoded"
// which includes form data
app.use(express.urlencoded({ extended: true }))

// when we use the html form from the "inherent events" lesson
// (but change the action to "http://localhost:4000/burrito")
// we can see that the request body included the data from the submitted form
app.post("/burrito", (req, res) => {
  console.log(req.body)
  res.send("you ordered a burrito")
})

// helper function to read data from the stored JSON file
const readData = () => {
  // read the file data
  const data = fs.readFileSync(BOOK_PATH)
  // parse as JSON
  const books = JSON.parse(data)
  return books
}

app.get("/", (req, res) => {
  const books = readData()
  // send response
  res.send(books)
})

app.get("/find/:bookId", (req, res) => {
  const books = readData()
  // find the book we're looking for
  const book = books.find((b) => b.id == req.params.bookId)
  res.send(book)
})

app.post("/", (req, res) => {
  const books = readData()
  // add new book
  books.push(req.body)
  // write to file
  fs.writeFileSync(BOOK_PATH, JSON.stringify(books))

  res.send(`Successfully added ${req.body.title} by ${req.body.author}`)
})

// a PUT request should always be idempotent
// meaning you can perform the operation multiple times
// and not change the outcome
app.put("/update/:bookId", (req, res) => {
  const books = readData()
  // find the book we're looking for
  const book = books.find((b) => b.id == req.params.bookId)
  // create updated book
  const newBook = Object.assign(book, req.body)
  // replace old book with updated book
  // find the index
  let index = books.indexOf(book)
  // overwrite book at index
  books[index] = newBook
  // write to file
  fs.writeFileSync(BOOK_PATH, JSON.stringify(books))
  res.send(`Successfully updated ${newBook.title} by ${newBook.author}`)
})

app.delete("/delete/:bookId", (req, res) => {
  const books = readData()
  // find the book we're looking for
  const book = books.find((b) => b.id == req.params.bookId)
  // find the index
  let index = books.indexOf(book)
  // remove from index
  books.splice(index, 1)
  // write to file
  fs.writeFileSync(BOOK_PATH, JSON.stringify(books))
  res.send(`Successfully deleted book id ${req.params.bookId}`)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
