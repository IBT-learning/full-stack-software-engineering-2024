import express from "express"
const router = express.Router()

// destructure these objects from the mongodb package
import { MongoClient, ObjectId } from "mongodb"
// create a new client for the mongodb server
const client = new MongoClient("mongodb://localhost:27017/")

// open a connection to the mongodb server
client.connect()

const getCollection = () => {
  try {
    // get a database from the server
    const db = client.db("newDB")
    // get a collection off that database
    const collection = db.collection("books")
    return collection
  } catch (err) {
    console.warn(`database error: ${err}`)
  }
}

router.get("/", async (req, res) => {
  // .find() returns a cursor that can be iterated over
  // or turned into an array
  // with no arguments, .find() returns everything in the collection
  const booksCursor = getCollection().find()
  const books = await booksCursor.toArray()
  res.json(books)
})

router.get("/find/:bookId", async (req, res) => {
  if (ObjectId.isValid(req.params.bookId)) {
    const book = await getCollection().findOne({
      // we have to turn the string into an ObjectId
      // because in the database, all ids are
      // instances of the type ObjectId
      _id: new ObjectId(req.params.bookId),
    })
    book ? res.json(book) : res.status(404).send("book not found")
  } else {
    res.status(404).send("invalid book id")
  }
})

router.post("/", async (req, res) => {
  // add a new entry, only if the fields are included
  if (req.body.title && req.body.author) {
    // "insert" means "add a new document"
    const result = await getCollection().insertOne({
      title: req.body.title || "untitled",
      author: req.body.author || "unkown author",
    })
  } else {
    res.status(422).send("invalid entry")
  }
  res.send(`added ${req.body.title} by ${req.body.author}`)
})

export default router
