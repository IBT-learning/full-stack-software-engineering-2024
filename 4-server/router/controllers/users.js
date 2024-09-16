import express from "express"
const router = express.Router()

router.get("/users", (req, res) => {
    res.send("You hit the get endpoint")
}
)

router.put("/users", (req, res) => {
    res.send("You hit the put endpoint")
}
)

router.delete("/users", (req, res) => {
    res.send("You hit the delete endpoint")
}
)
export default router