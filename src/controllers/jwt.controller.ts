import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const JWTController = {
  createToken(payload: any, refresh = false) {
    const accessToken = jwt.sign(
      {
        exp: 10,
        data: payload,
      },
      process.env.JWT_SECRET as string
    );
    return {
      access_token: accessToken,
      refresh_token: refresh
        ? jwt.sign(
            {
              exp: 30 * 24 * 60 * 60,
              data: payload,
            },
            process.env.JWT_SECRET as string
          )
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
