import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";
import { JWTController } from "../controllers/jwt.controller";

const userRoutes = Router();

userRoutes.get(
  "/",
  JWTController.verifyAccessToken.bind(JWTController),
  UserController.getUsers
);

userRoutes.put("/:id", updateUserValidator, UserController.updateUser);
userRoutes.get("/:id", UserController.getUser);
userRoutes.delete("/:id", UserController.deleteUser);

export default userRoutes;
