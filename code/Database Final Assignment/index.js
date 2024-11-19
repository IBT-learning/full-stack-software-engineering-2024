import express from 'express';
import {dbConnect} from "./db.js";
import "dotenv/config"
import cors from 'cors';

const app = express();
const PORT = process.env.SERVER_PORT

app.use(cors())
app.use(express.json())

import router from "./controllers/users.js"
import postRouter from "./controllers/posts.js"
app.use("/auth", router)
app.use("/posts", postRouter)

app.listen(PORT, () =>{
    dbConnect()
    console.log(`[server]: listening on port ${PORT}`)
})