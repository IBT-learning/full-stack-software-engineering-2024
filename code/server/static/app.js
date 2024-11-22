import expess from "express"
const app = expess()
import path from "path"
const PORT = 4000
import fs from "fs"

app.use(expess.static("public"))

app.get("/todo", (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "public/toDo.json"))
})

app.get("/find", (req, res) => {
    const userId = req.query.userId; // Get userId from the query string

    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

    const list = fs.readFileSync("public/toDo.json");
    const users = JSON.parse(list); // Parse the JSON data

    const user = users.find((u) => u.id == userId);

    if (user) {
        res.send(user); 
    } else {
        return res.status(404).json({ message: "User not found" }); 
    }
})


    // const list = fs.readFileSync("public/toDo.json")
    // const todo = JSON.parse(list)
    // // const todoItem = todo.find((i) => i.id == req.params.todoId)

    // if (todoItem) {
    //     res.send(todoItem);  // Send the found todo
    // } else {
    //     res.status(404).send({ error: "Todo item not found" });
    // }

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`);
})