import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static("static"));
app.use(cors());

// Endpoint for post data
app.get("/post-data", (req, res) => {
  const filePath = path.join(__dirname, "data", "post-data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read post-data" });
    }
    res.json(JSON.parse(data));
  });
});

// Endpoint for user data
app.get("/user-data/:id", (req, res) => {
  const filePath = path.join(__dirname, "data", "user-data.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read user-data" });
    }

    const users = JSON.parse(data);
    const user = users.find((user) => user.id === parseInt(req.params.id));

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  });
});

app.listen(PORT, () => {
  console.log(`Express running on ${PORT}`);
});
