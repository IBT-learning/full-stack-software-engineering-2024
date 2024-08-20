import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is my Express Server!</h1>");
});

app.get("/about", (req, res) => {
  res.send("My name is Jade, Welcome to my Express Server.");
});

app.get("/greet/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(`Hello, ${userName}! Welcome to my Express Server`);
});

app.get("/favorite", (req, res) => {
  const fave = req.query.fave;

  if (fave) {
    res.send(`My favorite thing is ${fave}`);
  } else {
    res.send(` Please enter your favorite thing in the query string... `);
  }
});

app.listen(4000, () => {
  console.log("Listening");
});
