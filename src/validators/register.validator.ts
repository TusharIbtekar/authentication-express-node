import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("name").isString().isLength({ min: 2 }).not().isEmpty(),
  body("password").isLength({ min: 3 }).not().isEmpty(),
  body("email").isEmail().withMessage("Email must be valid"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
