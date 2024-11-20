import express from "express"
import {MongoClient, ObjectId} from "mongodb"
const app = express()
const PORT = 4000

app.use(express.json())

const client = new MongoClient("mongodb://localhost:27017")
client.connect()
//Error Handling
    .then(() => {
        const db = client.db('newDB');  
        const collections = db.collection('newCollection');  
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);

    });

app.post("/", async(req,res) =>{
    const datab = client.db("newDB")
    const collection = datab.collection("newCollection")
    const data = await collection.insertOne(req.body)
    console.log(data);
    
    res.json(data)
})


app.get("/", async(req,res)=>{
    const datab = client.db("newDB")
    const collection = datab.collection("newCollection")
    const documents = await collection.find().toArray()

    res.json(documents)
})

app.get("/find/:documentid", async (req,res)=>{
    const datab = client.db("newDB")
    const collection = datab.collection("newCollection")
    const document = await collection.findOne({
        _id: new ObjectId(req.params.documentid)
    })

    res.json(document)
})

app.post("/update", async(req,res)=>{
    const datab = client.db("newDB")
    const collection = datab.collection("newCollection")
    //filter, upsert,$set
    // filter - to find the document(s) to update.
    const filter = {
        _id: new ObjectId("6733f4936780d7dc2a356add"),
        name: "Trevor"
    }

    //option - any additional options, such as upsert
    const option = {upsert: true} //optional, when you want the datat  inserted when no present

    //updateDoc - specify the fields and values to update
    const updateDoc = {
        $set:{name: "Max" }
        }

    const result = await collection.updateOne(filter,updateDoc,option)

    console.log(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
    );

    res.json(result)
    
})

app.post("/delete", async(req,res)=>{
    const datab = client.db("newDB")
    const collection = datab.collection("newCollection")

    const deleteData = {_id: new ObjectId ("6733f1836780d7dc2a356adb")}
    
    try {
    
        const result = await collection.deleteOne(deleteData)

        if (result.deletedCount === 1 ){
            console.log("Successfully deleted");
        }

        else{
            console.log("Data not found. 0 data deleted");
            
        }

        res.send(result)
    }
    catch(error){
        res.status(500).send(`Error occured while deleting data`)
    }
})


app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
    
})




/**
Database Assignment #1: mongodb practice
We're going to set up a very simple server, connect to the database, and add some data. I didn't show this in the lesson, but the driver methods that get the database and collection are actually "get or create" methods. That means that if you try to get a database or collection that doesn't exist, mongodb will actually create them for you. In this exercise we'll create a new database and collection through the mongodb driver.

Set up an express server
Create a new express server just like you normally do, but also install mongodb. Use the express.json() middleware in your app.js.

Set up a POST endpoint to the path '/'. Make sure you can read the request body, by logging it or sending it back on the response.

Connect to the mongodb server
import the mongodb driver
get MongoClient from it
create a new client with MongoClient
call client.connect() to establish your connection
Add data to a new database
in your endpoint, use the client to get a database called newDB
from the database, get a collection called newCollection
on the collection, call insertOne with the request body as the argument
in Postman, make a call to this endpoint with a JSON request body of your choice (any valid JSON will do, use {"test":"test"} or something more interesting)
Check Compass
If your previous steps were successful, you should be able to see newDB with newCollection and the document you created in Compass. You will probably have to refresh the view, with this symbol: 🔄

Extra challenge (optional)
Add a few entries to your new DB (just by making further calls in Postman.) Set up an endpoint to get all of your documents.

For a further challenge, set up an endpoint to get specific documents by their id.

For an even further challenge, look up how to update and delete documents, and implement endpoints to perform those operations

*/