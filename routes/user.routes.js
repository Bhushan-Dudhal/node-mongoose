import express from "express"
import { RegisterPost } from "../controllers/user.controllers.js"



const router = express.Router()



router.post("/register",RegisterPost)




export default router