import express from "express";
import { registerValidator } from "./validators/register.validator";
import { AuthController } from "./controllers/auth.controller";
import { loginValidator } from "./validators/login.validator";
import routes from "./routes/base.route";

require("reflect-metadata");
const app = express();
app.use(express.json());
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
