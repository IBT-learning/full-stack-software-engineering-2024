import express from "express"
import { dbConnect } from "./db.js"
import path from "path"
import router from "./controllers/users.js"
import blogRouter from "./controllers/posts.js"
import { fileURLToPath } from "url"
import cors from "cors"
import "dotenv/config"



const app = express()
const port = process.env.SERVER_PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static("public"))
app.use(express.json())
app.use("/user", router )
app.use("/blog", blogRouter )
app.use(cors())

// app.get("/", (req, res) => {
//     res.sendFile(path.join(import.meta.dirname, "/public/home.html"))
// })
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});



app.listen(`${port}`, ()=> {
    dbConnect()
    console.log(`[server]: listening on port ${port}`);
})