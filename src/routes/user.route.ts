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
 *      - User
 *     summary: Use to fetch all users
 *     description: Use this endpoint to fetch every user.
 *     responses:
 *       '200':
 *         description: Successfully fetched
 */

userRoutes.get("/", getUsers);

/**
 * @openapi
 * components:
 *  schemas:
 *    UpdateUserInput:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          default: testupdate
 *        email:
 *          type: string
 *          default: test@gmail.com
 *        password:
 *          type: string
 *          default: hello
 *    UpdateUserResponse:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        id:
 *          type: number
 *        password:
 *          type: string
 */

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     tags:
 *      - User
 *     summary: Use to update user info
 *     description: Use this endpoint to update user information with user id.
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The id of the user to update
 *        required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserInput'
 *     responses:
 *       '200':
 *         description: Successful login
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UpdateUserResponse'
 *       '400':
 *         description: Invalid input data
 *       '401':
 *         description: Unauthorized - Invalid credentials
 */
userRoutes.put("/:id", updateUserValidator, updateUser);

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags:
 *      - User
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
