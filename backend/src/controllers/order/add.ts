import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Order, OrderBasket, OrderDoc } from "../../models/order";
import { User } from "../../models/user";
import { NotFoundError } from "../../errors/not-found-error";
import { Basket, BasketDoc } from "../../models/basket";
import { Product } from "../../models/product";

const router = express.Router();

router.post(
  "/api/order",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { userId = "" } = req.body;

    const user = await User.findOne({ userId });

    if (!user) {
      throw new NotFoundError();
    }

    const statusTags = ["CLIENT_ORDERED"];

    const currentBasket = await Basket.find({ ownerId: userId });

    if (!currentBasket) {
      throw new NotFoundError();
    }

    let result: { [key: string]: BasketDoc[] } = {};

    let itemsByProvider:BasketDoc[][] = [];

    currentBasket.forEach((item) => {
      const key = item["providerIdentifier"];
      if (typeof key === "string") {
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
      }

      itemsByProvider = Object.values(result);
    });

    const orderBasket: OrderBasket = itemsByProvider.map(provider => ({
      providerId: provider[0].providerIdentifier,
  products: provider.map(item => {

    const product = Product.findOne({id:item.id})

    return {
      id: item.productId,
      name: string;
      amount: number;
      shortDescription: string;
      price: string;
      totalNettoPrice: string;
      totalBruttoPrice: string;
      thubnail: string;
    }
  })))

    currentBasket.map((item) => {});

    const newOrder = Order.build({
      ownerId: userId,
      ownerName: user.name,
      ownerSurname: user.surname,
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
