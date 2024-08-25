import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("You called the GET method");
});

app.post("/post", (req, res) => {
  res.send("You called the POST method");
});

app.put("/put", (req, res) => {
  res.send("You called the PUT method");
});

app.delete("/delete", (req, res) => {
  res.send("You called the DELETE method");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
