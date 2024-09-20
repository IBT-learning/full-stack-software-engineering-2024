const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const PORT = 4000;
const uri = "mongodb+srv://jemitigo23:3Adp4lP5d9tGcdeR@cluster0.q4cqf.mongodb.net/"; // MongoDB connection URI
const { ObjectId } = require('mongodb');

// Middleware to parse JSON
app.use(express.json());

let db, collection;

async function connectToMongo() {
  try {
    // Create a new MongoClient and connect
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected to MongoDB");

    // Get the database and collection
    db = client.db('newDB');
    collection = db.collection('newCollection');
  } catch (err) {
    console.error(err);
  }
}

// Call the function to connect to MongoDB
connectToMongo();

// POST endpoint to add data to the collection
app.post('/', async (req, res) => {
  try {
    const result = await collection.insertOne(req.body);
    res.status(200).json({ message: "Document inserted", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error inserting document" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/all', async (req, res) => {
    try {
      const docs = await collection.find({}).toArray();
      res.status(200).json(docs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching documents" });
    }
  });
 
  app.get('/:id', async (req, res) => {
    try {
      const doc = await collection.findOne({ _id: new ObjectId(req.params.id) });
      res.status(200).json(doc);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error fetching document by ID" });
    }
  });

    //   update method
  app.put('/:id', async (req, res) => {
    try {
      const result = await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
      );
      res.status(200).json({ message: "Document updated", result });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error updating document" });
    }
  });

//   delete method
app.delete('/:id', async (req, res) => {
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.status(200).json({ message: "Document deleted", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting document" });
  }
});


  
    
