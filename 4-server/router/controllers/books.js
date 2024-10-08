import express from "express"
const router = express.Router()

// the router is a function object
// we can attach our endpoints to it

router.get("/", (req, res) => {
  res.send("you hit the get endpoint for books")
})

router.post("/add", (req, res) => {
  res.send("you hit the post endpoint for books")
})

router.put("/", (req, res) => {
  res.send("you hit the put endpoint for books")
})

router.delete("/", (req, res) => {
  res.send("you hit the delete endpoint for books")
})

// we must remember to export the router object
// otherwise we'll get an error like "requested module does not provide an export named 'default'"
export default router
