import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { BadRequestError } from "../../errors/bad-request-error";
import { Tag, TagDoc } from "../../models/tag";

const router = express.Router();

router.post(
  "/api/category/add-tag",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { name = "" } = req.body;

    const tag = await Tag.findOne({
      name,
    });

    //check if tag already exists
    if (tag) {
      throw BadRequestError;
    }

    const newTag = Tag.build({
      name,
    });

    await newTag.save();

    const response: ResponseType<TagDoc> = {
      status: "success",
      code: 201,
      message: "Tag created successfully",
      data: newTag,
    };

    res.status(201).send(response);
  }
);

export { router as addTagRouter };
