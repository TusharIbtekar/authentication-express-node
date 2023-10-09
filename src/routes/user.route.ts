import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";
import { JWTController } from "../controllers/jwt.controller";

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.put("/:id", updateUserValidator, updateUser);
userRoutes.get("/:id", getUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
