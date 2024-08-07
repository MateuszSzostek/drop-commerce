import express, { Request, Response } from "express";
import { Product, ProductDoc, ProductQuery } from "../../models/product";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";
import { PaginatedItems } from "../../types";
import { InternalServerError } from "../../errors/internal-server-error";

const router = express.Router();

router.get(
  "/api/product/get-all",
  requireAuth,
  async (req: Request<{}, {}, {}, ProductQuery>, res: Response) => {
    const {
      page = "1",
      limit = "10",
      name = "",
      category = "",
      tag = "",
    } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const matchConditions: any = {
      categories: { $regex: category, $options: "i" },
    };

    try {
      const products = await Product.aggregate([
        {
          $match: matchConditions,
        },
      ]);

      const totalProducts = await Product.countDocuments({
        name: { $regex: name, $options: "i" },
      });

      const response: ResponseType<PaginatedItems<ProductDoc>> = {
        status: "success",
        code: 200,
        message: "Products returned successfully",
        data: {
          totalPages: Math.ceil(totalProducts / parseInt(limit as string)),
          currentPage: parseInt(page as string),
          hasNext: false,
          hasPrevious: false,
          items: products,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
      throw new InternalServerError();
    }
  }
);

export { router as getAllProductRouter };
