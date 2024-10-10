import express from "express";
const app = express();
const PORT = 4000
//parse the Json Object
app.use(express.json());
//destructure the mongodb package
import { MongoClient } from "mongodb"
// create a new mongo client
const client = new MongoClient("mongodb://localhost:27017/")

//connect to the local database
client.connect()

app.post('/', async (req, res) => {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Get the database 
        const database = client.db('newDB');
        //get the collection
        const collection = database.collection('newCollection');

        // Insert the request body into the collection
        const result = await collection.insertOne(req.body);
          // Send the result back to the client
        res.status(201).send(result);
    } catch (error) {
        console.warn(error)};
     } )
//listening  for requests
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
    
});
