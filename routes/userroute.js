import express from "express";
import { register,login } from "../controllers/user.controller";
const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(updateProfile);