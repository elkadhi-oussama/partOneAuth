import { check, validationResult } from "express-validator";

export const registerRules = () => [
  check("email", "please enter a correct mail").isEmail(),
  check("email", "email is required").notEmpty(),
  check("password", "password is required").isLength({
    min: 6,
    max: 20,
  }),
  check("pseudo", "pseudo is required").notEmpty(),
];

export const loginRules = () => [
  check("email", "please enter a correct mail").isEmail(),
  check("email", "email is required").notEmpty(),
  check("password", "password is required").isLength({
    min: 6,
    max: 20,
  }),
];

export const validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .send({ errors: errors.array().map((err) => ({ msg: err.msg })) });
  }
  next();
};
