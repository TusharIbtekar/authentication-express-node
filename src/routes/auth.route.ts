import { Router } from "express";
import { registerValidator } from "../validators/register.validator";
import { login, register } from "../controllers/auth.controller";
import { loginValidator } from "../validators/login.validator";

const authRoutes = Router();

authRoutes.post("/register", registerValidator, register);

authRoutes.post("/login", loginValidator, login);

export default authRoutes;
