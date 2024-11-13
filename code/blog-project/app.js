import express from "express";
import fs from "fs";
import path from "path";

const PORT = 4000;

const app = express();
const blogPost_Path = "./public/backend/blogposts.json";
const newpost_Path = "./public/backend/newposts.json";

app.use(express.static("public"));

app.get("/main", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, blogPost_Path));
  console.log("json data sent to endpoint");
});

app.get("/main/userposts", (req, res) => {
  const data = fs.readFileSync(blogPost_Path);
  const blogEntries = JSON.parse(data);
  res.send(blogEntries);
  console.log("endpoint-1 reached");
});

app.get("/main/userposts/new", (req, res) => {
  const data = fs.readFileSync(newpost_Path);
  const newposts = JSON.parse(data);
  res.send(newposts);
  console.log(`endpoint-2 reached`);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
