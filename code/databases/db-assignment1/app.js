import express from "express"
import { MongoClient } from "mongodb"

const app = express()
const port = 4000
const client = new MongoClient("mongodb://localhost:27017")
client.connect()

app.use(express.json())

app.post("/", async (req, res) => {
    const db =client.db("newDB")
    const collection = db.collection("newCollection")
     const result = await collection.insertOne(req.body)
    res.json({"test":"test"})
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})