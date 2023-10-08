import { Request, Response } from "express";
import express from "express";
import { registerValidator } from "./validators/register.validator";
import { AuthController } from "./controllers/auth.controller";
import { loginValidator } from "./validators/login.validator";

require("reflect-metadata");
const app = express();
app.use(express.json());
const port = 3000;

app.post("/register", registerValidator, AuthController.register);

app.post("/login", loginValidator, AuthController.login);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
