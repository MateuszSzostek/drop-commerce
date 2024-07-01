import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { Product, ProductDoc } from "../../models/product";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";

const router = express.Router();

router.get(
  "/api/product/get/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      throw new NotFoundError();
    }

    const response: ResponseType<ProductDoc> = {
      status: "success",
      code: 201,
      message: "Product returned successfully",
      data: product,
    };

    res.send(response);
  }
);

export { router as getProductRouter };
