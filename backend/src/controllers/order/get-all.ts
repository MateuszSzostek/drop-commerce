import express, { Request, Response } from "express";
import { Order, OrderDoc } from "../../models/order";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/order/get-all",
  requireAuth,
  async (req: Request, res: Response) => {
    const orders = await Order.find();

    if (!orders) {
      throw new NotFoundError();
    }

    const response: ResponseType<OrderDoc[]> = {
      status: "success",
      code: 201,
      message: "Orders returned successfully",
      data: orders,
    };

    res.status(201).send(response);
  }
);

export { router as showAllOrderRouter };
