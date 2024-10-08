import express from "express"
const router = express.Router()

router.post("/login", (req, res) => {
  res.send("you hit the post endpoint")
})

router.post("/register", (req, res) => {
  res.send("you hit the post endpoint")
})

export default router
