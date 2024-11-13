import express from "express"
const router = express.Router()

import { MongoClient, ObjectId } from "mongodb"
const client = new MongoClient("mongodb://localhost:27017")

client.connect()

const getCollection = () => {
    try {
            //TODO: return all books
        const db = client.db("books")
        const collection = db.collection("book")
        return collection
    } catch (err) {
        console.warn(`database error: ${err}`)
    }
    
}

router.get ("/", async (req, res) => {
    const booksCursor = getCollection().find()
    const books = await booksCursor.toArray()
    console.log(books)

    res.json(books)
})


router.get ("/find/:bookId", async (req, res) => {
   if (ObjectId.isValid(req.params.bookId)) {
    const book = await getCollection().findOne({
        _id: new ObjectId(req.params.bookId)
    })
    book ? res.json(book): res.status(404).send("book not found")
} else {
    res.status(404).send("invalid book id")
}

   
})

router.post ("/", async (req, res) => {
   const result = await getCollection().insertOne({
    title:  req.body.title,
    author: req.body.author, 
   })
   res.send(`added ${req.body.title} by ${req.body.author}`)
})

export default router
