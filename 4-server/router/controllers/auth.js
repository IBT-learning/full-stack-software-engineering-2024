import express from "express"
const router = express.Router()

router.get("/auth/login", (req, res) => {
    res.send("You hit the get endpoint")
}
)

router.post("/auth/login", (req, res) => {
    res.send("You hit the post endpoint")
}
)

router.delete("/auth", (req, res) => {
    res.send("You hit the delete endpoint")
}
)

export default router