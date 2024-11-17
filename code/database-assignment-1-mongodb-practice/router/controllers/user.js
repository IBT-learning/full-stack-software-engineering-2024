import express from "express";
const router = express.Router();

import { MongoClient } from "mongodb";
const client = new MongoClient("mongodb://localhost:27017");

client.connect();

router.post("/", async (req, res) => {
  try {
    const db = client.db("newDB");
    const collection = db.collection("newCollection");
    const insert = await collection.insertOne({
      title: req.body.title,
      author: req.body.author,
    });

    res.send(
      `You have successfully added ${req.body.title} by ${req.body.author}`
    );
  } catch (err) {
    res.status(500).send("Error inserting data");
  }
});

export default router;
