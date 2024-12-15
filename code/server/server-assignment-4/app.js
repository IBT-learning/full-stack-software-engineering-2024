import express from "express";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 4000;

const DATA_PATH = path.join("public/data/todo-data.json") ;
// const CLIENT_PATH = "/";

app.use(express.static("public"));

// helper function to read data from the stored JSON file
const readData = () => {
  // read the file data
  const data = fs.readFileSync(DATA_PATH, "utf8");
  // parse as JSON
  const todos = JSON.parse(data);
  return todos;
};


app.get("/todos", (req, res) => {
  const todos = readData();
  const userId = parseInt(req.query.userId)
  
  if (isNaN(userId)){
    return res.status(400).json({ error: "Invalid UserId" })
  }
  //   find the todo we're looking for
  const filteredTodos = todos.filter((todo) => todo.userId === userId);
  res.json(filteredTodos);
});


app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
