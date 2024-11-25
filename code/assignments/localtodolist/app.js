import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = 4001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("static"));

app.get("/todo", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "todo.json"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
