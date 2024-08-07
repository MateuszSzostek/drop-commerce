import express, { Request, Response } from "express";
import { Tag, TagDoc } from "../../models/tag";
import { requireAuth } from "../../middlewares/require-auth";
import { ResponseType } from "../../services/response";
import { NotFoundError } from "../../errors/not-found-error";

const router = express.Router();

router.get(
  "/api/category/tag/get-all",
  requireAuth,
  async (req: Request, res: Response) => {
    const tags = await Tag.find();

    if (!tags) {
      throw new NotFoundError();
    }

    const response: ResponseType<TagDoc[]> = {
      status: "success",
      code: 201,
      message: "Tags returned successfully",
      data: tags,
    };

    res.status(201).send(response);
  }
);

export { router as getAllTagRouter };
