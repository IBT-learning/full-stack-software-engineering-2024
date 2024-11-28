import express from "express"
import mongoose from "mongoose"
const router = express.Router()

import Book from "../models/Book.js"

router.get("/", async (req, res) => {
    const books = await Book.find()
    res.send(books)
})

router.get("/find/:bookId", async (req, res) => {
    const { bookId } = req.params

    if (!mongoose.Types.ObjectId.isValid(bookId)){
        return res.status(404).send("invalid book ID format")
    }

    const book = await Book.findOne({
        _id: req.params.bookId
    })
    book ? res.json(book) : res.status(404).send("book not found")
})
router.post("/", async (req, res) => {
    try {
        const newBook = new Book(req.body)
        await newBook.save()
        console.log(newBook)
        res.send(`added ${req.body.title} by ${req.body.author}`)
    } catch (err){
        res.status(422).send(err.errors.title.message)
    }
})

router.put("/update/:bookId", async (req, res) => {
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

router.delete("/delete/:bookId", async (req, res) => {
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
export default router 