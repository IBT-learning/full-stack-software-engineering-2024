import express from "express"
const router = express.Router()

router.get("/api", (req, res) => {
    res.send("You hit the get endpoint for books")
}
)

router.post("/api", (req, res) => {
    res.send("You hit the post endpoint for books")
}
)

router.put("/api", (req, res) => {
    res.send("You hit the put endpoint for books")
}
)

router.delete("/api", (req, res) => {
    res.send("You hit the delete endpoint for books")
}
)
export default router