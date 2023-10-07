import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const loginValidator = [
  body("email").isEmail().withMessage("Email must be valid"),
  body("password").isLength({ min: 3 }).not().isEmpty(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
