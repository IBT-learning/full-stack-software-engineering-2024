import express from "express";

import {
  createAccount,
  userLogin,
  userLogOut,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", createAccount);
router.post("/login", userLogin);
router.post("/logout", userLogOut);

export default router;
