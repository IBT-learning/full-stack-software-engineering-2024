import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("you hit the get endpoint")
})

router.put("/", (req, res) => {
  res.send("you hit the put endpoint")
})

router.delete("/", (req, res) => {
  res.send("you hit the delete endpoint")
})

export default router
