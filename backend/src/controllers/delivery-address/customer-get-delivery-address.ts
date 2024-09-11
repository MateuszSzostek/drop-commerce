import express, { Request, Response } from "express";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import {
  DeliveryAddress,
  DeliveryAddressDoc,
} from "../../models/deliveryAddress";
import { BadRequestError } from "../../errors/bad-request-error";
import { body } from "express-validator";

const router = express.Router();

router.get(
  "/api/delivery-address/customer-get-delivery-address/:deliveryAddressId",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { userId } = req.body;
    const { deliveryAddressId } = req.params;

    console.log("deliveryAddressId");
    console.log(deliveryAddressId);

    const existingDeliveryAddress = await DeliveryAddress.findOne({
      ownerId: userId,
      _id: deliveryAddressId,
    });

    if (!existingDeliveryAddress) {
      throw new BadRequestError([
        {
          field: "deliveryAddressId",
          message: "Delivery addresses not found",
        },
      ]);
    }

    const response: ResponseType<DeliveryAddressDoc> = {
      status: "success",
      code: 200,
      message: "Delivery address of user returned successfully",
      data: existingDeliveryAddress,
    };

    res.status(200).send(response);
  }
);

export { router as customerGetDeliveryAddress };
