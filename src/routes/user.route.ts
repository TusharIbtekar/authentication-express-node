import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";

const userRoutes = Router();
/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *      - Fetch all users
 *     summary: Use to fetch all users
 *     description: Use this endpoint to fetch every user.
 *     responses:
 *       '200':
 *         description: Successfully fetched
 */

userRoutes.get("/", getUsers);

userRoutes.put("/:id", updateUserValidator, updateUser);
userRoutes.get("/:id", getUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
