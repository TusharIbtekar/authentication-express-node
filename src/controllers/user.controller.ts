import { User } from "../entity/User";

export const UserController = {
  async getUserByEmail(email: string) {
    const user = await User.findOne({ where: { email: email } });

    return user;
  },
};
