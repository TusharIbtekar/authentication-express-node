import { Router } from "express";
import { registerValidator } from "../validators/register.validator";
import { AuthController } from "../controllers/auth.controller";
import { loginValidator } from "../validators/login.validator";

const authRoutes = Router();

authRoutes.post("/register", registerValidator, AuthController.register);

authRoutes.post("/login", loginValidator, AuthController.login);

export default authRoutes;
