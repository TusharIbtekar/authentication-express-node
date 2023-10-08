import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

export const updateUserValidator = [
  param("id").isInt().not().isEmpty(),
  body("name").isString().isLength({ min: 2 }).optional(),
  body("email").isEmail().withMessage("Email must be valid").optional(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
