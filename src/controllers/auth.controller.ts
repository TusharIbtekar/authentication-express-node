import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entity/User";
import { UserController } from "./user.controller";

export const AuthController = {
  async register(req: Request, res: Response) {
    let user = await UserController.getUserByEmail(req.body.email);
    if (user) {
      return res.status(400).json({ errors: { msg: "User already exists" } });
    } else {
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);

      user = User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      });
      await AppDataSource.manager.save(user);
      res.send(user);
    }

    // AppDataSource.destroy();
  },
  async login(req: Request, res: Response) {
    let user = await UserController.getUserByEmail(req.body.email);
    if (!user) {
      return res
        .status(400)
        .json({ errors: { msg: "You have to register first." } });
    } else {
      const validatePassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (validatePassword) {
        res.send(user);
      } else {
        return res.status(400).json({ errors: { msg: "Wrong password." } });
      }
    }

    // AppDataSource.destroy();
  },
};
