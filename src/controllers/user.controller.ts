import { Request, Response } from "express";
import { User } from "../entity/User";

export const UserController = {
  async getUsers() {
    const user = await User.find();
    return user;
  },
  async getUser(req: Request, res: Response) {
    const user = await User.findBy({ id: parseInt(req.params.id) });
    return user;
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
