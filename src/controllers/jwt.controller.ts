import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const JWTController = {
  createToken(payload: any, refresh = false) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: 30,
    });
    return {
      access_token: accessToken,
      refresh_token: refresh
        ? jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn: 30 * 24 * 60 * 60,
          })
        : null,
    };
  },

  verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
      return decoded;
    } catch (error) {
      return null;
    }
  },
};
