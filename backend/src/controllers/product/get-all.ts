import express, { Request, Response } from "express";
import { Product, ProductDoc } from "../../models/product";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/product/get-all",
  requireAuth,
  async (req: Request, res: Response) => {
    const products = await Product.find();

    if (!products) {
      throw new NotFoundError();
    }

    const response: ResponseType<ProductDoc[]> = {
      status: "success",
      code: 201,
      message: "Products returned successfully",
      data: products,
    };

    res.status(201).send(response);
  }
);

export { router as getAllProductRouter };
