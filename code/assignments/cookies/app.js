import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/cookie", (req, res) => {
  const theme = req.query.theme;
  const oneMinute = 60000;
  res.cookie("newMode", theme, { maxAge: oneMinute * 5 });
  res.send("sent!");
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
