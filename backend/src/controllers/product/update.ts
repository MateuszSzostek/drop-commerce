import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { NotFoundError } from "../../errors/not-found-error";
import { validateRequest } from "../../middlewares/validate-request";
import { Product, ProductDoc } from "../../models/product";
import { ResponseType } from "../../services/response";

const router = express.Router();

router.put(
  "/api/product/:id",
  requireAuth,
  // [body("name").not().isEmpty().withMessage("Name is required")],
  validateRequest,
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      throw new NotFoundError();
    }

    const {
      providerProductId = "",
      name = "",
      provider = "",
      price = "",
      provicerPrice = "",
      margin = "",
      vat = "",
      netProfit = "",
      suggestedDetailPrice = "",
      shortDescription = "",
      description = "",
      tooBigForParcelLocker = "",
      deliveryTime = "",
      nextDelivery = "",
      lenght = "",
      weight = "",
      height = "",
      amountInBox = "",
      state = "DISABLED",
      code = "",
      linkToInstruction = "",
      categories = [],
      volume = "",
      pictures = [],
      pendingUpdates = {},
      mirrorProductIds = [],
    } = req.body;

    product.set({
      providerProductId,
      name,
      provider,
      price,
      provicerPrice,
      margin,
      vat,
      netProfit,
      suggestedDetailPrice,
      shortDescription,
      description,
      tooBigForParcelLocker,
      deliveryTime,
      nextDelivery,
      lenght,
      weight,
      height,
      amountInBox,
      state,
      code,
      linkToInstruction,
      categories,
      volume,
      pictures,
      pendingUpdates,
      mirrorProductIds,
    });
    await product.save();

    const response: ResponseType<ProductDoc> = {
      status: "success",
      code: 201,
      message: "Product updated successfully",
      data: product,
    };

    res.send(response);
  }
);

export { router as updateProductRouter };
