import express from "express"
import path from "path"
const router = express.Router()



router.get("/", (req,res) => {
    res.sendFile(path.join(import.meta.dirname, "./my-to-do.json"))
})

export default router