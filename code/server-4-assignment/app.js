import express from "express"
const app = express()


const PORT = 4000


import todosRouter from "./controllers/todos.js"

app.use(express.static("static"))
app.use("/mytodos", todosRouter)



app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
})