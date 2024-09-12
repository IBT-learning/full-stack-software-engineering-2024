import express from "express"
import path from "path"
const app = express()

const PORT = 4000

// Serve static files from the "public" folder
app.use(express.static("public"))

// Create an endpoint to serve the json file
app.get("/todos", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "todos.json"));
});


app.listen(PORT, () => {
  console.log("Listening on port 4000");
})
