import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Basket, BasketDoc } from "../../models/basket";
import { BadRequestError } from "../../errors/bad-request-error";
import { Product } from "../../models/product";
import { deliveryCosts } from "../../services/deliveryCosts";

const router = express.Router();

router.post(
  "/api/basket/add-to-basket",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { providerIdentifier = "", quantity = 1 } = req.body;

    // console.log(req.body.userId);
    // console.log(providerIdentifier);

    const itemInStore = await Product.findOne({
      providerIdentifier,
    });

    if (!itemInStore) {
      throw new BadRequestError([
        {
          field: "providerIdentifier",
          message: "Not found",
        },
      ]);
    }

    // console.log(itemInStore);

    const itemInBasket = await Basket.findOne({
      ownerId: req.body.userId,
      providerIdentifier,
    });

    //check if item in basket already exists
    if (itemInBasket) {
      // Increment quantity
      const qt: number = itemInBasket.quantity + 1;

      // Calculate updated unit price
      const uPrice: number =
        parseFloat(itemInStore?.netPrice) *
        (parseFloat(itemInStore?.vat) / 100 + 1);

      // Calculate new total price
      const tPrice = qt * uPrice;

      // Update the item in memory
      itemInBasket.quantity = qt;
      itemInBasket.unitPrice = uPrice;
      itemInBasket.totalPrice = tPrice;

      // Save the updated item to the database
      try {
        console.log(itemInBasket);
        await itemInBasket.save();
      } catch (e) {
        console.log(e);
      }

      const response: ResponseType<BasketDoc> = {
        status: "success",
        code: 201,
        message: "Item added to basket successfully",
        data: itemInBasket,
      };

      res.status(201).send(response);

      return;
    }

    console.log("HERE");

    const newItemInBasket = Basket.build({
      ownerId: req.body.userId,
      providerIdentifier,
      provider: itemInStore.provider,
      quantity,
      unitPrice:
        parseFloat(itemInStore?.netPrice) *
        (parseFloat(itemInStore?.vat) / 100 + 1),
      totalPrice:
        parseFloat(itemInStore?.netPrice) *
        (parseFloat(itemInStore?.vat) / 100 + 1) *
        quantity,
      productName: itemInStore?.name,
      picture: itemInStore?.pictures[0],
      deliveryCost: deliveryCosts[itemInStore?.provider as string],
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
