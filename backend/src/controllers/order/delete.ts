import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth } from "../../middlewares/require-auth";
import { NotFoundError } from "../../errors/not-found-error";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Order, OrderDoc } from "../../models/order";

const router = express.Router();

router.delete(
  "/api/order/:id",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      throw new NotFoundError();
    }

    await order.delete();

    const response: ResponseType<OrderDoc> = {
      status: "success",
      code: 204,
      message: "Order deleted successfully",
      data: order,
    };

    res.status(204).send(response);
  }
);

export { router as deleteOrderRoute };
