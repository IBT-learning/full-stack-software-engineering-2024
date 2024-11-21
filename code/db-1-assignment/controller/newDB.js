import express from "express"
const router = express.Router()

import { MongoClient } from "mongodb"
const client = new MongoClient("mongodb://localhost:27017/")

client.connect()

router.post("/", async (req, res) => {
    const newDB = client.db("newDb")
    const newCollection = newDB.collection("newCollection")
    const addToDB = await newCollection.insertOne(req.body)
    res.send(addToDB)
    
    
})

export default router