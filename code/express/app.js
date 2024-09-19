import express from "express";

const app = express();

// console.log(app);

app.get("/", (req, res) => {
  console.log("Does this work?");
  res.send("<h1>Hello There</h1>");
});

app.get("/about", (req, res) => {
  console.log("About Nyawira");
  res.send("<h3>My name is Nyawira Gitaka from Kenya!</h3>");
});

app.get("/greet:userName", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.userName}`);
});

app.get("/favourite", (req, res) => {
  if (req.query.fave) {
    console.log(req.query.fave);
    res.send(`My favourite thing is ${req.query.fave}`);
  } else {
    console.log("No favourite thing");
    res.send("No favourite activity found");
  }
});
app.listen(4000, () => {
  console.log("Listening on port 4000");
});
