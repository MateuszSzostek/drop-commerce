import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Category, CategoryDoc } from "../../models/category";

const router = express.Router();

router.post(
  "/api/category",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { categoriesTreeObj = "", categoriesList = [] } = req.body;

    const categoriesData = await Category.find({});

    console.log(categoriesTreeObj);

    if (categoriesData.length === 0) {
      const categoriesData = Category.build({
        categoriesTreeObj,
        categoriesList,
      });

      categoriesData.save();
    } else {
      categoriesData[0].set({ categoriesTreeObj, categoriesList });
      categoriesData[0].save();
    }

    const response: ResponseType<CategoryDoc> = {
      status: "success",
      code: 201,
      message: "Category created successfully",
      data: categoriesData[0],
    };

    res.status(201).send(response);
  }
);

export { router as applyCategoriesRouter };
