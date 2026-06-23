import express from "express";
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", LoginUser);
router.post("/register", RegisterUser);
router.get("/logout", LogoutUser);

export default router;