import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Product, ProductDoc } from "../../models/product";
import { BadRequestError } from "../../errors/bad-request-error";
import { IkonkaProduct } from "../../models/ikonkaProduct";

const router = express.Router();

router.post(
  "/api/product/check-for-update",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    // porownac wszystkie snapshoty istniejacych produktow w bazie z produktami z hurtowni
    // a nastepnie zaaplikowanie propsow w bazie dla kazdego produktu:
    // price, desicription, shortDescription i calej reszty tak aby mozna bylo latwo stwierdzic
    // czy produkt zostal zaaktualizowany w hurtowni

    //check if product already exists

    const response: ResponseType<{}> = {
      status: "success",
      code: 201,
      message: "Checks for updates proced successfully",
      data: {},
    };

    res.status(201).send(response);
  }
);

export { router as checkForUpdatesRouter };
