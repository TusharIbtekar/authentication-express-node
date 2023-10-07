import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entity/User";

export const UserController = {
  async register(req: Request, res: Response) {
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
      await AppDataSource.manager.save(user);
      res.send(user);
    }

    // AppDataSource.destroy();
  },
};
