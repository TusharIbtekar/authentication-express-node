import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express from "express";

require("reflect-metadata");
const app = express();
app.use(express.json());
const port = 3000;

app.post(
  "/register",
  body("name").isString().isLength({ min: 2 }).not().isEmpty(),
  body("password").isLength({ min: 3 }).not().isEmpty(),
  body("email").isEmail().withMessage("Email must be valid"),
  // body("lastname").isString().isLength({ min: 2 }),

  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await AppDataSource.connect();

    let user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
      return res.status(400).json({ errors: { msg: "User already exists" } });
    } else {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      user = User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      res.send(user);
    }
  }
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from App Engine!");
});

app.listen(port, () => {
  console.log("first app listening on port 3000!");
});
