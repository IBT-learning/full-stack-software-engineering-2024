import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const PORT = 4000;
const DATA_PATH = "public/data/todo-data.json";
// const CLIENT_PATH = "/";

app.use(express.static("public"));

// helper function to read data from the stored JSON file
const readData = () => {
  // read the file data
  const data = fs.readFileSync(DATA_PATH);
  // parse as JSON
  const todos = JSON.parse(data);
  return todos;
};

// app.get("/todo", (req, res) => {
//   res.sendFile(
//     path.join(import.meta.dirname, "public/data/todo-data.json")
//   );

// });

app.get("/todos", (req, res) => {
  const todos = readData();
  //   find the user we're looking for
  const user = todos.find((todo) => todo.userId == req.query.userId);
  res.sendFile(user);
});

// app.get("/find/:userId", (req, res) => {
//     const users = readData()
//     // find the user we're looking for
//     const user = users.find((b) => b.id == req.params.userId)
//     res.send(user)
//   })

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
