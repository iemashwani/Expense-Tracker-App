import { Router } from "express";
import {createUser, loginUser} from "./user.controller"

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);

