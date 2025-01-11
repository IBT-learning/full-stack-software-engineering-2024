import express from "express";

import {
  getProfile,
  updateProfile,
  deleteProfile,
  followOrUnfollowUser,
} from "../controllers/user.controller.js";

import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/profile/:userid", protectRoute, getProfile);
router.put("/update/:userid", protectRoute, updateProfile);
router.delete("/delete/:userid", protectRoute, deleteProfile);
router.post("/following/:userid", protectRoute, followOrUnfollowUser);

export default router;
