import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { Basket, BasketDoc } from "../../models/basket";

const router = express.Router();

router.get(
  "/api/basket/get-basket",
  requireAuth,
  async (req: Request, res: Response) => {
    const basket = await Basket.find({ ownerId: req.body?.userId });

    if (!basket) {
      throw new NotFoundError();
    }

    const response: ResponseType<BasketDoc[]> = {
      status: "success",
      code: 201,
      message: "Basket returned successfully",
      data: basket,
    };

    res.send(response);
  }
);

export { router as getBasketRouter };
