import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("You hit the get request endpoint.");
  res.send("Hello, This is the Home Page");
});

app.post("/", (req, res) => {
  console.log("You hit the post request endpoint.");
  res.send("Hello, This is the Post Home Page");
});

app.put("/", (req, res) => {
  console.log("You hit the put request endpoint.");
  res.send("Hello, This is the Put Home Page");
});

app.delete("/", (req, res) => {
  console.log("You hit the delete request endpoint.");
  res.send("Hello, This is the Delete Home Page");
});

app.listen(4000, () => {
  console.log("Listening at port 4000");
});
