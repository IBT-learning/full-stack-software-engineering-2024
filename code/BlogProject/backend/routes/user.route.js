import express from "express";
// import { protectRoute } from "../middlewares/protectRoute.js";

import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile", getProfile);
router.put("/update", updateProfile);
router.delete("/delete", deleteProfile);

export default router;
