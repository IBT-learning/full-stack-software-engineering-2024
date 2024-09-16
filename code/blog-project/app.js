import express from "express";
import fs from "fs";
import path from "path";

const PORT = 4000;

const app = express();
const blogPost_Path = "./public/data/blogposts.json";

app.use(express.static("public"));

app.get("/main", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, blogPost_Path));
  console.log("json data sent to endpoint");
});

app.get("/main/userposts", (req, res) => {
  const data = fs.readFileSync(blogPost_Path);
  const blogEntries = JSON.parse(data);
  res.send(blogEntries);
  console.log("endpoint was reached");
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
