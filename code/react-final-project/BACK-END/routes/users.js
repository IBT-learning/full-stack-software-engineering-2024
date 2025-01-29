import { Router } from "express"
const router = Router()

import {
  // editProfilePhoto,
  getProfileDetails,
  addProfileDetails,
  editDisplayName,
  editLocation,
  editHairType,
  editPorosity,
  editBio,
  deleteAccount,
} from "../controllers/users-controller.js"


// Use PATCH if you're only changing one thing and leaving 
// the rest of the profile unchanged. PATCH implies a 
// partial update, where only the specified fields are modified,
// in my case only one specified field is selected to be updated at a time.
// Use PUT if you're replacing the entire user profile resource 
// with new data. PUT implies the entire resource is being replaced, 
// even if you're only changing one field.

// in these routes it's patch because I'm targeting editing
// one thing at a time. In my posts-controller, it's put because
// I'm targeting editing the entire req.body even though 
// I can still update only one thing in the req.body

// when you use PUT even though you're not updating the entire body,
// you still need to send the entire body which can be cumbersome if it has 
// a lot of fields. Using PATCH is better because it saves you from
// writing the fields of an entire body every time you want to make an update,
// esp. if not every field is changing


// router.patch("/profile_photo", editProfilePhoto)

router.get("/", getProfileDetails)

router.put("/set_up", addProfileDetails)

router.patch("/display_name", editDisplayName)

router.patch("/location", editLocation)

router.patch("/hairtype", editHairType)

router.patch("/porosity", editPorosity)

router.patch("/bio", editBio)

router.delete("/delete", deleteAccount)

export default router

