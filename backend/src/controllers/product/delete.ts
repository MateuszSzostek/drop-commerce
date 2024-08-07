import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth } from "../../middlewares/require-auth";
import { NotFoundError } from "../../errors/not-found-error";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Product, ProductDoc } from "../../models/product";
import { IkonkaProduct } from "../../models/ikonkaProduct";

const router = express.Router();

router.delete(
  "/api/product/:id",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      throw new NotFoundError();
    }

    await product.delete();

    const response: ResponseType<ProductDoc> = {
      status: "success",
      code: 204,
      message: "Product deleted successfully",
      data: product,
    };

    const providerProduct = await IkonkaProduct.findOne({
      kod: product.providerIdentifier,
    });

    if (providerProduct) {
      providerProduct.set({ alreadyInShop: false });
    }

    res.status(204).send(response);
  }
);

export { router as deleteProductRoute };
