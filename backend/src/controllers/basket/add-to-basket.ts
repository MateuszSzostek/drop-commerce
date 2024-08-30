import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Basket, BasketDoc } from "../../models/basket";
import { BadRequestError } from "../../errors/bad-request-error";

const router = express.Router();

router.post(
  "/api/basket/add-to-basket",
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
    if (itemInBasket) {
      itemInBasket.update({ quantity: itemInBasket.quantity + 1 });

      await itemInBasket.save();

      const response: ResponseType<BasketDoc> = {
        status: "success",
        code: 201,
        message: "Item added to basket successfully",
        data: itemInBasket,
      };

      res.status(201).send(response);
    }

    const newItemInBasket = Basket.build({
      ownerId,
      providerIdentifier,
      productId,
      providerProductId,
      quantity,
    });

    await newItemInBasket.save();

    const response: ResponseType<BasketDoc> = {
      status: "success",
      code: 201,
      message: "New item to basket added successfully",
      data: newItemInBasket,
    };

    res.status(201).send(response);
  }
);

export { router as addItemToBasketRouter };
