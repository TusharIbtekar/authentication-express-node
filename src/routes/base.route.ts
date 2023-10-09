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

routes.get("/new_access_token", grantNewAccessToken);

export default routes;
