import { Router } from "express"
const router = Router()

import { createAccount, logIn } from "../controllers/users-auth-controller.js"


router.post("/sign_up", createAccount)

router.post("/sign_in", logIn)


export default router