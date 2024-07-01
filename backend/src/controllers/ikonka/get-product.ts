import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";
import { IkonkaProduct, IkonkaProductDoc } from "../../models/ikonkaProduct";

const router = express.Router();

router.get(
  "/api/ikonka/get-product/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const ikonkaProduct = await IkonkaProduct.findOne({ _id: id });
    console.log("HERE");

    if (!ikonkaProduct) {
      throw new NotFoundError();
    }

    const response: ResponseType<IkonkaProductDoc> = {
      status: "success",
      code: 200,
      message: "Ikonka product returned successfully",
      data: ikonkaProduct,
    };

    res.status(200).send(response);
  }
);

export { router as getIkonkaProductRouter };
