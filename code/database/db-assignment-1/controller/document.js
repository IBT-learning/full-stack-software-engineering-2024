import express from "express";
import { MongoClient, ObjectId } from "mongodb";

const router = express.Router();
const client = new MongoClient("mongodb://localhost:27017/newDB");
client.connect();

router.post("/", async (req, res) => {
  if (req.body.stack && req.body.name) {
    const newDB = client.db("newDB");
    const collection = newDB.collection("newCollection");
    await collection.insertOne({
      name: req.body.name,
      stack: req.body.stack,
      proficiency: req.body.proficiency || "not stated",
    });
    res.status(201).json({
      success: true,
      message: "inserted " + req.body.stack + " to the db",
    });
  } else {
    res.status(404).json({ success: false, message: "incomplete input field" });
  }
});

router.get("/", async (req, res) => {
  try {
    const newDB = client.db("newDB");
    const collection = newDB.collection("newCollection");
    const stacks = collection.find();
    const allDocuments = await stacks.toArray();
    res.status(200).json({ success: true, data: allDocuments });
  } catch (error) {
    console.error(`error: ${error}`);
    res.status(500).json({ success: false, message: "server error" });
  }
});

router.get("/find/:docId", async (req, res) => {
  if (ObjectId.isValid(req.params.docId)) {
    const newDB = client.db("newDB");
    const collection = newDB.collection("newCollection");
    const document = await collection.findOne({
      _id: new ObjectId(req.params.docId),
    });
    document
      ? res.status(201).json({ success: true, data: document })
      : res.status(404).json({ success: false, message: "document not found" });
  } else {
    res.status(404).json({ success: false, meassage: "invalid document Id" });
  }
});

export default router;
