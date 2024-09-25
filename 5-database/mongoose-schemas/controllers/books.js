import express from "express"
const router = express.Router()

import Book from "../models/Book.js"

router.get("/", async (req, res) => {
  const books = await Book.find()
  res.send(books)
})

router.get("/find/:bookId", async (req, res) => {
  // TODO: check object id validity
  const book = await Book.findOne({ _id: req.params.bookId })
  book ? res.json(book) : res.status(404).send("book not found")
})

router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body)
    await newBook.save()
    res.send(`added ${req.body.title} by ${req.body.author}`)
  } catch (err) {
    res.status(422).send(err.errors.title)
  }
})

router.put("/update/:bookId", async (req, res) => {
  // TODO: Dan is going to figure out why this doesn't work
  Book.findOneAndUpdate({ _id: req.params.bookId }, req.body)
  //   console.log(book)
  res.send("something happened")
})

export default router
