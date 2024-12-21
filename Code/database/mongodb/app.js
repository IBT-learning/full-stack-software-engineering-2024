import express from "express"

const app = express()
const PORT = 4000
app.use(express.json())

//Connecting to the mongodb server
import {MongoClient} from "mongodb"
const client = new MongoClient("mongodb://localhost:27017")
client.connect()



// Add data to a new database
app.post("/", async (req,res) => {
    const db = client.db("newDB") 
    const collection = db.collection("newCollection")
    const result = await collection.insertOne(req.body)
    res.status(200).send({
        message: 'Document inserted successfully',
        insertedId: result.insertedId,
    })
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})