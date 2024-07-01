import express, { Request, Response } from "express";
import { Chat, ChatDoc } from "../../models/chat";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";
import {
  IkonkaProduct,
  IkonkaProductDoc,
  IkonkaProductQuery,
} from "../../models/ikonkaProduct";
import { PaginatedItems } from "../../types";
import { InternalServerError } from "../../errors/internal-server-error";

const router = express.Router();

router.get(
  "/api/ikonka/get-products",
  requireAuth,
  async (req: Request<{}, {}, {}, IkonkaProductQuery>, res: Response) => {
    const {
      page = "1",
      limit = "10",
      name = "",
      providerProductId = "",
    } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    console.warn(pageNumber);
    console.warn(limitNumber);

    try {
      const ikonkaProducts = await IkonkaProduct.aggregate([
        {
          $match: {
            nazwa: { $regex: name, $options: "i" },
            kod: { $regex: providerProductId, $options: "i" },
          },
        },
        {
          $skip: ((pageNumber as number) - 1) * limitNumber,
        },
        {
          $limit: limitNumber,
        },
      ]);

      console.log("HERE");

      const totalProducts = await IkonkaProduct.countDocuments({
        nazwa: { $regex: name, $options: "i" },
      });

      const response: ResponseType<PaginatedItems<IkonkaProductDoc>> = {
        status: "success",
        code: 200,
        message: "Ikonka products returned successfully",
        data: {
          totalPages: Math.ceil(totalProducts / parseInt(limit as string)),
          currentPage: parseInt(page as string),
          hasNext: false,
          hasPrevious: false,
          items: ikonkaProducts,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
      throw new InternalServerError();
    }
  }
);

export { router as getAllIkonkaProductsRouter };
