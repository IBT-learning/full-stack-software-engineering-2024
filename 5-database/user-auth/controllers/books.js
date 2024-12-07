import express from "express"
const router = express.Router()
import { mongoose } from "../db.js"

import Book from "../model/Book.js"

/* 
NOTE: 
this is just a copy of the controller from the mongoose-schemas lesson
see users.js for the authentication-related endpoints
*/

router.get("/", async (req, res) => {
  // the queries work exactly the same as they do on the driver
  // so .find() with no arguments returns the entire collection
  const books = await Book.find()
  res.send(books)
})

router.get("/find/:bookId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    // .findOne() returns a single document, according to the given filter object
    const book = await Book.findOne({ _id: req.params.bookId })
    book ? res.json(book) : res.status(404).send("book not found")
  } else {
    res.status(404).send("invalid book id")
  }
})

router.post("/", async (req, res) => {
  try {
    const newBook = new Book(req.body)
    // when adding new documents, .save() is a separate operation
    // in case we want to make any changes to the document
    // in between creating it and sending it to the database
    await newBook.save()
    res.send(`added ${req.body.title} by ${req.body.author}`)
  } catch (err) {
    res.status(422).send(err.errors.title)
  }
})

router.put("/update/:bookId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    const filter = { _id: req.params.bookId }
    const body = req.body
    const options = { upsert: true }
    // upsert means "update or insert"
    // it will create a new document if it can't find any that match the filter
    // it is "false" by default, so we only need to set this option
    // if we want it to be true

    const book = await Book.updateOne(filter, body, options)
    console.log(book)
    if (book.modifiedCount === 1) {
      res.send("book successfully updated")
    } else if (book.upsertedCount === 1) {
      res.send("book successfully added")
    } else {
      res.send("operation failed")
    }
  } else {
    res.status(404).send("invalid book id")
  }
})

router.delete("/delete/:bookId", async (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.bookId)) {
    const filter = { _id: req.params.bookId }
    const book = await Book.deleteOne(filter)
    if (book.deletedCount === 1) {
      res.send("successfully deleted")
    } else {
      res.send("something went wrong")
    }
  } else {
    res.status(404).send("invalid book id")
  }
})

export default router
