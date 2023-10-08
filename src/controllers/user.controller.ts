import { Request, Response } from "express";
import { User } from "../entity/User";

export const UserController = {
  async getUsers(req: Request, res: Response) {
    const users = await User.find();
    res.send(users);
  },
  async getUser(req: Request, res: Response) {
    const user = await User.findBy({ id: parseInt(req.params.id) });

    if (!user) {
      res.status(404).send({ errors: { message: "User not found" } });
    } else {
      res.send(user);
    }
  },
  async getUserByEmail(email: string) {
    const user = await User.findOne({ where: { email: email } });
    return user;
  },
  async updateUser(req: Request, res: Response) {
    const user = await User.update(req.params.id, req.body);
    res.send({ message: "User updated successfully", user });
  },
};
