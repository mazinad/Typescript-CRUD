import express from "express";
import { getAllUsers,getUser,createUser,authenticateUser } from "../controller/user.controller";
import verifyToken from "../middleware/verifyToken.middleware";
import { validate } from "../middleware/validation.middleware";
import { userSchema } from "../validation_schemas/user.validationschema";
const userRoute=express.Router();

userRoute.post('/register',validate(userSchema),createUser);
userRoute.get('/users',verifyToken,getAllUsers);
userRoute.get('/user/:email',verifyToken,getUser);
userRoute.post('/user/auth',validate(userSchema),authenticateUser);

export default userRoute;
