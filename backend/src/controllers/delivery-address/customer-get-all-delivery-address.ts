import express, { Request, Response } from "express";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import {
  DeliveryAddress,
  DeliveryAddressDoc,
} from "../../models/deliveryAddress";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.get(
  "/api/delivery-address/customer-get-all-delivery-address",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { userId } = req.body;

    const existingDeliveryAddress = await DeliveryAddress.find({
      ownerId: userId,
    });

    if (!existingDeliveryAddress) {
      throw new BadRequestError([
        {
          field: "adresses",
          message: "Delivery addresses not found",
        },
      ]);
    }

    const response: ResponseType<DeliveryAddressDoc[]> = {
      status: "success",
      code: 200,
      message: "All delivery addresses of user returned successfully",
      data: existingDeliveryAddress,
    };

    res.status(200).send(response);
  }
);

export { router as customerGetAllDeliveryAddress };
