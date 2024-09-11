import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Basket, BasketDoc } from "../../models/basket";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.post(
  "/api/basket/remove-from-basket",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      ownerId = "",
      providerIdentifier = "",
      productId = "",
      providerProductId = "",
      quantity = 1,
    } = req.body;

    const itemInBasket = await Basket.findOne({
      ownerId,
      productId,
    });

    //check if item in basket already exists
    if (itemInBasket && itemInBasket.quantity > 0) {
      itemInBasket.update({ quantity: itemInBasket.quantity - 1 });

      await itemInBasket.save();

      if (itemInBasket.quantity === 0) {
        await itemInBasket.remove();
        const response: ResponseType<BasketDoc> = {
          status: "success",
          code: 200,
          message: "Item removed from basket successfully",
          data: itemInBasket,
        };
        res.status(200).send(response);
        return;
      } else {
        const response: ResponseType<BasketDoc> = {
          status: "success",
          code: 200,
          message: "Item removed from basket successfully",
          data: itemInBasket,
        };

        res.status(200).send(response);
      }
    }
  }
);

export { router as removeItemFromBasketRouter };
