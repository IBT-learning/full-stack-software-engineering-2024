import express from "express"

import mongoose from "mongoose"
const booksRouter = express.Router()
import tokenValidation from "../middlewares/tokenValidation.js"
import Book from "../models/Book.js"




booksRouter.get("/",  async (req, res) => {
    const books = await Book.find()
    res.send(books)
})

booksRouter.get("/find/:bookId", async (req, res) => {
    const { bookId } = req.params

    if (!mongoose.Types.ObjectId.isValid(bookId)){
        return res.status(404).send("invalid book ID format")
    }

    const book = await Book.findOne({
        _id: req.params.bookId
    })
    book ? res.json(book) : res.status(404).send("book not found")
})
booksRouter.post("/", async (req, res) => {
    try {
        const newBook = new Book(req.body)
        await newBook.save()
        console.log(newBook)
        res.send(`added ${req.body.title} by ${req.body.author}`)
    } catch (err){
        res.status(422).send(err.errors.title.message)
    }
})

booksRouter.put("/update/:bookId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.bookId)){
        const filter = { _id : req.params.bookId }
        const body = req.body
        const options = {
            upsert: false
        }
        const book =  await Book.updateOne(filter, body)
        if (book.modifiedCount === 1){
            console.log(book)
            res.send("book has been updated")
        }else{
            res.send("operation failed")
        }
    }else{
        res.send("Invalid book ID")
    }
   
   
})

booksRouter.delete("/delete/:bookId", async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.bookId)){
        const filter = { _id: req.params.bookId }
        const book = await Book.deleteOne(filter)
        if (book.deletedCount === 1 ){
            res.send("Successfully deleted")
        } else {
            res.send("Deletion failed")
        }
       
    } else{
        res.status(404).send("invalid book id")
    }
})
export default booksRouter 