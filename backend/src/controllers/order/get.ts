import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { Order, OrderDoc } from "../../models/order";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";

const router = express.Router();

router.get(
  "/api/order/get/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
      throw new NotFoundError();
    }

    const response: ResponseType<OrderDoc> = {
      status: "success",
      code: 201,
      message: "Order returned successfully",
      data: order,
    };

    res.send(response);
  }
);

export { router as showOrderRouter };
