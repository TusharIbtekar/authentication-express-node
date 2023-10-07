import { Request, Response } from "express";
import express from "express";
import { registerValidator } from "./validators/register.validator";
import { UserController } from "./controllers/user.controller";
import { loginValidator } from "./validators/login.validator";

require("reflect-metadata");
const app = express();
app.use(express.json());
const port = 3000;

app.post("/register", registerValidator, UserController.register);

app.post("/login", loginValidator, UserController.login);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
