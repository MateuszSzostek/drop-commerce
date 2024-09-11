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

router.delete(
  "/api/delivery-address/customer-delete-delivery-address",
  requireAuth,
  [
    body("deliveryAddressId")
      .notEmpty()
      .withMessage("deliveryAddressId must exist"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { deliveryAddressId, userId } = req.body;

    const existingDeliveryAddress = await DeliveryAddress.findOne({
      ownerId: userId,
      _id: deliveryAddressId,
    });

    const existingDeliveryAddresses = await DeliveryAddress.find();
    console.log(existingDeliveryAddresses);
    console.log(existingDeliveryAddress);
    console.log(userId);
    console.log(deliveryAddressId);

    if (!existingDeliveryAddress) {
      throw new BadRequestError([
        {
          field: "deliveryAddressId",
          message: "Delivery address not found",
        },
      ]);
    }

    await existingDeliveryAddress.delete();

    const response: ResponseType<DeliveryAddressDoc> = {
      status: "success",
      code: 201,
      message: "New delivery address added successfully",
      data: existingDeliveryAddress,
    };

    res.status(201).send(response);
  }
);

export { router as customerDeleteDeliveryAddress };
