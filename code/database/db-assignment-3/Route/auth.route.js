import express from "express";

import {
  createAccount,
  loginToAccount,
  logOut,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", createAccount);
router.post("/login", loginToAccount);
router.post("/logout", logOut);

export default router;
