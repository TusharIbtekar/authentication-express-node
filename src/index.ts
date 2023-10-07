import { Request, Response } from "express";
import express from "express";
import { registerValidator } from "./validators/register.validator";
import { UserController } from "./controllers/user.controller";

require("reflect-metadata");
const app = express();
app.use(express.json());
const port = 3000;

app.post("/register", registerValidator, UserController.register);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
