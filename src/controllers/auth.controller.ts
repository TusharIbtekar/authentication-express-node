import { Request, Response } from "express";
import bcrypt from "bcrypt";
import AppDataSource from "../data-source";
import { User } from "../entity/User";
import { UserController } from "./user.controller";
import { JWTController } from "./jwt.controller";

export const register = async (req: Request, res: Response) => {
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

    const token = JWTController.createToken({ email: user.email }, true);

    res.cookie("refresh_token", token.refresh_token, {
      expires: new Date(
        Date.now() +
          parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string) *
            30 *
            24 *
            360000
      ),
      httpOnly: true,
    });

    await AppDataSource.manager.save(user);
    res.send({ user, access_token: token.access_token });
  }

  // AppDataSource.destroy();
};

export const login = async (req: Request, res: Response) => {
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
      const token = JWTController.createToken({ email: user.email }, true);

      res.cookie("refresh_token", token.refresh_token, {
        expires: new Date(
          Date.now() +
            parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string) *
              30 *
              24 *
              360000
        ),
        httpOnly: true,
      });
      res.send({ user, access_token: token.access_token });
    } else {
      return res.status(400).json({ errors: { msg: "Wrong password." } });
    }
  }

  // AppDataSource.destroy();
};
