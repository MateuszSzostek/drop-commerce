import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { NotFoundError } from "../../errors/not-found-error";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Tag, TagDoc } from "../../models/tag";

const router = express.Router();

router.delete(
  "/api/category/tag/:id",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const tag = await Tag.findById(id);

    if (!tag) {
      throw new NotFoundError();
    }

    await tag.delete();

    const response: ResponseType<TagDoc> = {
      status: "success",
      code: 204,
      message: "Tag deleted successfully",
      data: tag,
    };

    res.status(204).send(response);
  }
);

export { router as deleteTagRoute };
