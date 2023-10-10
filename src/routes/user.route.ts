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

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *      - Fetch one user
 *     summary: Use to fetch user with id
 *     description: Use this endpoint to fetch the parameter given user.
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the user to fetch
 *        required: true
 *     responses:
 *       '200':
 *         description: Successfully fetched
 */
userRoutes.get("/:id", getUser);
userRoutes.delete("/:id", deleteUser);

export default userRoutes;
