import express from "express"
import {addUser,getUser,getSingleUser,deleteUSer,updateUSer,login} from "../controller/userDataController.js"
import jwt from "jsonwebtoken"
import authentiCateToken from "../utils/authMiddleware.js"
import upload from "../utils/uploadMiddleware.js"

const router = express.Router()

router.post('/api/add-user',upload.single("image"),addUser)
router.get('/api/get-user',getUser)
router.get('/api/get-singleuser/:uid',authentiCateToken,getSingleUser)
router.delete('/api/delete-user/:uid',authentiCateToken,deleteUSer)
router.put('/api/update-user/:uid',authentiCateToken,updateUSer)
router.post('/api/login',login)

export default router