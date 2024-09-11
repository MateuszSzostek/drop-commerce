import express, { Request, Response } from "express";
import { body } from "express-validator";
import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { User, UserDoc } from "../../models/user";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.get(
  "/api/auth/customer-get-account-data",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { userId } = req.body;

    const existingUser = await User.findOne({ _id: userId });
    if (!existingUser) {
      throw new BadRequestError([
        {
          field: "credentials",
          message: "User not exists",
        },
      ]);
    }

    const response: ResponseType<UserDoc> = {
      status: "success",
      code: 201,
      message: "User data returned successfully",
      data: existingUser,
    };

    res.status(201).send(response);
  }
);

export { router as customerGetAccountData };
