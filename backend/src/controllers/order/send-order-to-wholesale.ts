import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Order, OrderDoc } from "../../models/order";

const router = express.Router();

router.post(
  "/api/order/:id",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    //logic to send order to specific wholesale

    const response: ResponseType<{}> = {
      status: "success",
      code: 201,
      message: "Order send to wholesale successfully",
      data: {},
    };

    res.status(201).send(response);
  }
);

export { router as sendOrderToWholesaleRouter };
