// import express from "express";
// const router = express.Router()
// ---use the aproach above when you need the whole express object
// and want to use other express methods from the express object eg.
// express.json()
// use the second method as used below when you only need
// the router method off of the express object

import { Router } from "express"
const router = Router()

import {
  getAllPosts
} from "../controllers/posts-controllers.js"

router.get("/", getAllPosts)


export default router
