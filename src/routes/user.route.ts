import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.put("/:id", updateUserValidator, updateUser);
userRoutes.get("/:id", getUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
