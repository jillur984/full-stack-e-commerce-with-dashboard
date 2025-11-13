import express from "express"
import { getUsers, userLogin, userRegister } from "../controllers/userController.js";

const userRouter=express.Router();

userRouter.get("/users",getUsers)
userRouter.post("/register",userRegister)
userRouter.post("/login",userLogin)

export default userRouter;