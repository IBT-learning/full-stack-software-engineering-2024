import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to Dfada's Homepage</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`I am a software developer with a fascination for the outer space.`);
});

app.get("/greet/:userName", (req, res) => {
  res.send(`Hello ${req.params.userName}, I am pleased to meet you.`);
});

//note to self: ESM prohibit implicit variable declaration.
app.get("/favorite", (req, res) => {
  if (Object.keys(req.query).length !== 0) {
    let feedback = "";
    for (const key of Object.keys(req.query)) {
      feedback += `My favorite ${key} is ${req.query[key]}. `;
    }
    res.send(feedback);
  } else {
    res.send(`No queries passed.`);
  }
});

app.listen(4000, () => {
  console.log(`listening at port 4000`);
});
