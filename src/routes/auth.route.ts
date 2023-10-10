import { Router } from "express";
import { registerValidator } from "../validators/register.validator";
import { login, register } from "../controllers/auth.controller";
import { loginValidator } from "../validators/login.validator";

const authRoutes = Router();
/**
 * @openapi
 * components:
 *  schemas:
 *    RegisterUserInput:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *      properties:
 *        name:
 *          type: string
 *          default: test
 *        email:
 *          type: string
 *          default: test@gmail.com
 *        password:
 *          type: string
 *          default: hello
 *    RegisterUserResponse:
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
 * /register:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Use to Register
 *     description: Use this endpoint to create a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUserInput'
 *     responses:
 *       '200':
 *         description: Successfully Registered
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RegisterUserResponse'
 *       '400':
 *         description: Invalid input data
 *       '401':
 *         description: Unauthorized - Invalid credentials
 */

authRoutes.post("/register", registerValidator, register);

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginUserInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: test@gmail.com
 *        password:
 *          type: string
 *          default: hello
 *    LoginUserResponse:
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
 * /login:
 *   post:
 *     tags:
 *      - Auth
 *     summary: Use to login
 *     description: Use this endpoint to authenticate a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUserInput'
 *     responses:
 *       '200':
 *         description: Successful login
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/LoginUserResponse'
 *       '400':
 *         description: Invalid input data
 *       '401':
 *         description: Unauthorized - Invalid credentials
 */

authRoutes.post("/login", loginValidator, login);

export default authRoutes;
