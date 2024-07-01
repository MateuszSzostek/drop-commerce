import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Order, OrderDoc } from "../../models/order";

const router = express.Router();

router.post(
  "/api/order",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      ownerId = "",
      ownerName = "",
      ownerSurname = "",
      statusTags = ["CLIENT_ORDERED"],
      basket = [],
    } = req.body;

    const newOrder = Order.build({
      ownerId,
      ownerName,
      ownerSurname,
      statusTags,
      basket,
    });

    await newOrder.save();

    const response: ResponseType<OrderDoc> = {
      status: "success",
      code: 201,
      message: "Order created successfully",
      data: newOrder,
    };

    res.status(201).send(response);
  }
);

export { router as newOrderRouter };
