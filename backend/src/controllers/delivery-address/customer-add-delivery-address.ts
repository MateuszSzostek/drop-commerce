import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import {
  DeliveryAddress,
  DeliveryAddressDoc,
} from "../../models/deliveryAddress";

const router = express.Router();

router.post(
  "/api/delivery-address/customer-add-delivery-address",
  requireAuth,
  [
    body("name").notEmpty().withMessage("name must exist"),
    body("surname").notEmpty().withMessage("Surname must exist"),
    body("phone").notEmpty().withMessage("phone must exist"),
    body("place").notEmpty().withMessage("place must exist"),
    body("streetName").notEmpty().withMessage("street must exist"),
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

    const newDeliveryAddress = await DeliveryAddress.build({
      ownerId: userId,
      name,
      surname,
      phone,
      place,
      streetName,
      streetNumber,
      post,
      postCode,
      voivodeship,
      commune,
    });

    await newDeliveryAddress.save();

    const response: ResponseType<DeliveryAddressDoc> = {
      status: "success",
      code: 201,
      message: "New delivery address added successfully",
      data: newDeliveryAddress,
    };

    res.status(201).send(response);
  }
);

export { router as customerAddDeliveryAddress };
