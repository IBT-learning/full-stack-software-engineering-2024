import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { promises as fs } from "fs"; // Import fs.promises to read the JSON file

const app = express();
const port = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static("static"));

app.get("/data", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "data.json");
    const data = await fs.readFile(filePath, "utf-8"); // Read the JSON file
    res.json(JSON.parse(data)); // Parse and send the JSON data
  } catch (err) {
    res.status(500).send("Error sending file");
  }
});

app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
