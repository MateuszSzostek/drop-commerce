import express, { Request, Response } from "express";
import { NotFoundError } from "../../errors/not-found-error";
import { Category, CategoryDoc } from "../../models/category";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";

const router = express.Router();

router.get(
  "/api/category",
  requireAuth,
  async (req: Request, res: Response) => {
    const category = await Category.find();

    console.log(category);

    if (!category) {
      throw new NotFoundError();
    }

    const response: ResponseType<CategoryDoc> = {
      status: "success",
      code: 200,
      message: "Categories returned successfully",
      data: category[0],
    };

    res.send(response);
  }
);

export { router as getCategoriesRouter };
