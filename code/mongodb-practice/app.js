import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

const PORT = 4000;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

const main = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    
    app.post('/', async (req, res) => {
      console.log(req.body);

      const db = client.db('newDB');
      const collection = db.collection('newCollection');

      const result = await collection.insertOne(req.body);
      console.log("Document inserted:", result.insertedId);

      res.status(201).json({ message: "Document added", id: result.insertedId });
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};


main();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
