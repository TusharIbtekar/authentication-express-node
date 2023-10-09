import { Router } from "express";
import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";
import { JWTController } from "../controllers/jwt.controller";
import userRoutes from "./user.route";
import authRoutes from "./auth.route";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

routes.use("/user", userRoutes);
routes.use("/", authRoutes);

routes.get(
  "/new_access_token",
  JWTController.grantNewAccessToken.bind(JWTController)
);

export default routes;
