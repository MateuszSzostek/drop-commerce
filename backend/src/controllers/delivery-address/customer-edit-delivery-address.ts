import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import {
  DeliveryAddress,
  DeliveryAddressDoc,
} from "../../models/deliveryAddress";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.post(
  "/api/delivery-address/customer-edit-delivery-address",
  requireAuth,
  [
    body("deliveryAddressId")
      .notEmpty()
      .withMessage("deliveryAddressId must exist"),
    body("name").notEmpty().withMessage("name must exist"),
    body("surname").notEmpty().withMessage("Surname must exist"),
    body("phone").notEmpty().withMessage("phone must exist"),
    body("place").notEmpty().withMessage("place must exist"),
    body("streetName").notEmpty().withMessage("street must exist"),
    body("streetNumber").notEmpty().withMessage("streetNumber must exist"),
    body("post").notEmpty().withMessage("post must exist"),
    body("postCode").notEmpty().withMessage("postCode must exist"),
    body("surname").notEmpty().withMessage("Surname must exist"),
    body("voivodeship").notEmpty().withMessage("voivodeship must exist"),
    body("commune").notEmpty().withMessage("communep must exist"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      deliveryAddressId,
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

    const existingDeliveryAddress = await DeliveryAddress.findOne({
      _id: deliveryAddressId,
      ownerId: userId,
    });

    if (!existingDeliveryAddress) {
      throw new BadRequestError([
        {
          field: "deliveryAddressId",
          message: "Delivery address not found",
        },
      ]);
    }

    existingDeliveryAddress.name = name;
    existingDeliveryAddress.surname = surname;
    existingDeliveryAddress.phone = phone;
    existingDeliveryAddress.place = place;
    existingDeliveryAddress.streetName = streetName;
    existingDeliveryAddress.streetNumber = streetNumber;
    existingDeliveryAddress.post = post;
    existingDeliveryAddress.postCode = postCode;
    existingDeliveryAddress.voivodeship = voivodeship;
    existingDeliveryAddress.commune = commune;

    await existingDeliveryAddress.save();

    const response: ResponseType<DeliveryAddressDoc> = {
      status: "success",
      code: 200,
      message: "Delivery address has been edited successfully",
      data: existingDeliveryAddress,
    };

    res.status(201).send(response);
  }
);

export { router as customerEditDeliveryAddress };
