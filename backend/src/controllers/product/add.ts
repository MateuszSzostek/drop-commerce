import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Product, ProductDoc } from "../../models/product";
import { BadRequestError } from "../../errors/bad-request-error";
import { IkonkaProduct, IkonkaProductAttrs } from "../../models/ikonkaProduct";

const router = express.Router();

router.post(
  "/api/product",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      providerIdentifier = "",
      name = "",
      provider = "",
      netPrice = "",
      providerNettoPrice = "",
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
      state = "",
      code = "",
      linkToInstruction = "",
      categories = "",
      tags = [],
      volume = "",
      pictures = [],
      pendingUpdates = [],
      mirrorProductIds = [],
    } = req.body;

    //console.warn(req.body);

    const product = await Product.findOne({
      providerIdentifier,
    });

    //check if product already exists
    if (product) {
      throw BadRequestError;
    }

    const providerSnapshot = await IkonkaProduct.findOne({
      kod: providerIdentifier,
    });

    //check is wholesealer product snapshot has been found
    if (!providerSnapshot) {
      throw BadRequestError;
    }

    const newProduct = Product.build({
      providerIdentifier,
      name,
      provider,
      netPrice,
      providerNettoPrice,
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
      tags,
      volume,
      pictures,
      pendingUpdates,
      mirrorProductIds,
      lastUpdateProviderProductSnapshot: providerSnapshot as IkonkaProductAttrs,
    });

    await newProduct.save();

    const providerProduct = await IkonkaProduct.findOne({
      kod: providerIdentifier,
    });

    if (providerProduct) {
      providerProduct.set({ alreadyInShop: true });
      await providerProduct?.save();
    }

    const response: ResponseType<ProductDoc> = {
      status: "success",
      code: 201,
      message: "Product created successfully",
      data: newProduct,
    };

    res.status(201).send(response);
  }
);

export { router as addProductRouter };
