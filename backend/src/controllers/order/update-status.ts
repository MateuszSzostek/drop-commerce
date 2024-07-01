import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { NotFoundError } from "../../errors/not-found-error";
import { validateRequest } from "../../middlewares/validate-request";
import { Order, OrderDoc } from "../../models/order";
import { ResponseType } from "../../services/response";

const router = express.Router();

router.put(
  "/api/order/:id",
  requireAuth,
  // [body("name").not().isEmpty().withMessage("Name is required")],
  validateRequest,
  async (req: Request, res: Response) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
      throw new NotFoundError();
    }

    const { statusTags } = req.body;

    //update status tags of order

    order.set({
      statusTags,
    });
    await order.save();

    const response: ResponseType<OrderDoc> = {
      status: "success",
      code: 201,
      message: "Order updated successfully",
      data: order,
    };

    res.send(response);
  }
);

export { router as updateStatusRouter };
