import { Router } from "express";
import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";
import { registerValidator } from "../validators/register.validator";
import { AuthController } from "../controllers/auth.controller";
import { loginValidator } from "../validators/login.validator";

const routes = Router();

routes.get("/user", UserController.getUsers);

routes.post("/register", registerValidator, AuthController.register);

routes.post("/login", loginValidator, AuthController.login);

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

routes.put("/user/:id", updateUserValidator, UserController.updateUser);

routes.get("/user/:id", UserController.getUser);

export default routes;
