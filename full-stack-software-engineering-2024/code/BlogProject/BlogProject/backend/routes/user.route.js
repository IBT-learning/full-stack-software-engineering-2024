import express from "express";

import {
  getProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/user.controller.js";

import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getProfile);
router.put("/update/:username", protectRoute, updateProfile);
router.delete("/delete/:username", protectRoute, deleteProfile);

export default router;
