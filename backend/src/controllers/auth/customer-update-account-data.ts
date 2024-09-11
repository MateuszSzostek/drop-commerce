import express, { Request, Response } from "express";
import { body } from "express-validator";
import { BadRequestError } from "../../errors/bad-request-error";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { User, UserDoc } from "../../models/user";
import { requireAuth } from "../../middlewares/require-auth";

const router = express.Router();

router.post(
  "/api/auth/customer-update-account-data",
  requireAuth,
  [
    body("name").notEmpty().withMessage("Name must exist"),
    body("surname").notEmpty().withMessage("Surname must exist"),
    body("userName").notEmpty().withMessage("User name must exist"),
    body("phone").notEmpty().withMessage("phone must exist"),
    body("place").notEmpty().withMessage("place must exist"),
    body("streetName").notEmpty().withMessage("streetName must exist"),
    body("streetNumber").notEmpty().withMessage("streetNumber must exist"),
    body("post").notEmpty().withMessage("post must exist"),
    body("postCode").notEmpty().withMessage("postCode must exist"),
    body("voivodeship").notEmpty().withMessage("voivodeship must exist"),
    body("commune").notEmpty().withMessage("commune must exist"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      name,
      surname,
      userName,
      phone,
      place,
      streetName,
      streetNumber,
      post,
      postCode,
      voivodeship,
      commune,
      userId,
    } = req.body;

    const existingUser = await User.findOne({ _id: userId });
    if (!existingUser) {
      throw new BadRequestError([
        {
          field: "credentials",
          message: "User not exists",
        },
      ]);
    }

    await existingUser.save();

    existingUser.name = name;
    existingUser.surname = surname;
    existingUser.userName = userName;
    existingUser.phone = phone;
    existingUser.place = place;
    existingUser.streetName = streetName;
    existingUser.streetNumber = streetNumber;
    existingUser.post = post;
    existingUser.postCode = postCode;
    existingUser.voivodeship = voivodeship;
    existingUser.commune = commune;

    // Save the updated item to the database
    try {
      await existingUser.save();
    } catch (e) {
      console.log(e);
    }

    const response: ResponseType<UserDoc> = {
      status: "success",
      code: 201,
      message: "User data updated successfully",
      data: existingUser,
    };

    res.status(201).send(response);
  }
);

export { router as customerUpdateAccountData };
