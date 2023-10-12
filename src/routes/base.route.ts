import { Router } from "express";
import { Request, Response } from "express";
import userRoutes from "./user.route";
import authRoutes from "./auth.route";
import {
  grantNewAccessToken,
  verifyAccessToken,
} from "../controllers/jwt.controller";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

routes.use("/user", verifyAccessToken, userRoutes);
routes.use("/", authRoutes);

/**
 * @swagger
 * /new_access_token:
 *   get:
 *     tags:
 *      - Auth
 *     summary: Use to generate new access token
 *     description: Use this endpoint to generate a new access token.
 *     responses:
 *       '200':
 *         description: Successfully created new access token
 */
routes.get("/new_access_token", grantNewAccessToken);

export default routes;
