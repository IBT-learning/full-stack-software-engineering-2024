import express from "express"
const router = express.Router()

import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://localhost:27017")
client.connect()

const getCollection = () => {
    const db = client.db("newDB")
    const collection = db.collection("newCollection")
    return collection
}
router.post("/", async(req, res) => {
    
    const newDb = await getCollection().insertOne(req.body)

    res.json(newDb)
})
router.post("/entries", async(req, res) => {
    
    const newDb = await getCollection().insertOne(req.body)

    res.json(newDb)
})

router.get("/", async(req, res) => {
    const newCursor = getCollection().find()
    const newDb = await newCursor.toArray()
    console.log(newDb)

    res.json(newDb)
})

router
export default router