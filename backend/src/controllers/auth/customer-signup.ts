import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middlewares/validate-request";

import { User } from "../../models/user";
import { ResponseType } from "../../services/response";
import { UserDoc } from "../../models/user";

const router = express.Router();

router.post(
  "/api/auth/customer-sign-up",
  [
    body("email").isEmail().withMessage("must-be-a-valid-email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("must-be-at-least-4-characters-long-and-at-most-20")
      .matches(/^(?=.*[!@#$%^&*])/)
      .withMessage("must-contain-at-least-one-special-character"),
    body("privacyPolicy").equals("true").withMessage("must-be-accepted"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, name, surname, phone, privacyPolicy } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError([
        {
          field: "email",
          message: "in-use",
        },
      ]);
    }

    const user = User.build({
      email,
      password,
      name,
      surname,
      phone,
      privacyPolicy,
      roles: ["CUSTOMER"],
    });
    await user.save();

    // Generate JWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    //@ts-ignores
    req.session.token = userJwt;

    const response: ResponseType<UserDoc> = {
      status: "success",
      code: 201,
      message: "User created successfully",
      data: user,
    };

    res.status(201).send(response);
  }
);

export { router as customerSignupRouter };
