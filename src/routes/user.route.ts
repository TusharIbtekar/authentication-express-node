import { Router } from "express";
import { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { updateUserValidator } from "../validators/updateUser.validator";
import { registerValidator } from "../validators/register.validator";
import { AuthController } from "../controllers/auth.controller";
import { loginValidator } from "../validators/login.validator";
import { User } from "../entity/User";

const routes = Router();

routes.get("/user", async (req: Request, res: Response) => {
  const allUsers = await UserController.getUsers();
  res.send(allUsers);
});

routes.post("/register", registerValidator, AuthController.register);

routes.post("/login", loginValidator, AuthController.login);

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

routes.put("/user/:id", updateUserValidator, UserController.updateUser);

export default routes;
