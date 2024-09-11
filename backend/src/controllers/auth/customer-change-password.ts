import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";

import { Password } from "../../services/password";
import { User, UserDoc } from "../../models/user";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.post(
  "/api/users/customer-change-password",
  requireAuth,
  [
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
    body("newPassword")
      .trim()
      .notEmpty()
      .withMessage("You must supply a new password"),
    body("newPasswordRepeat")
      .trim()
      .notEmpty()
      .withMessage("You must supply a new password repeat"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { password, newPassword, newPasswordRepeat, userId } = req.body;

    const existingUser = await User.findOne({ id: userId });
    if (!existingUser) {
      throw new BadRequestError([
        {
          field: "user",
          message: "user-not-exist",
        },
      ]);
    }

    const passwordsMatch = await Password.compare(
      existingUser.password,
      password
    );

    if (!passwordsMatch) {
      throw new BadRequestError([
        {
          field: "password",
          message: "invalid-password",
        },
      ]);
    }

    const newPasswordsMatch = await Password.compare(
      newPassword,
      newPasswordRepeat
    );

    if (!newPasswordsMatch) {
      throw new BadRequestError([
        {
          field: "new-password",
          message: "new-password-not-match",
        },
      ]);
    }

    existingUser.password = newPassword;

    try {
      await existingUser.save();
    } catch (e) {
      console.log(e);
    }

    const response: ResponseType<UserDoc> = {
      status: "success",
      code: 200,
      message: "User password updated successfully",
      data: existingUser,
    };

    res.status(201).send(response);
  }
);

export { router as signinRouter };
