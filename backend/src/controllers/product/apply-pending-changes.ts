import express, { Request, Response } from "express";
import { requireAuth } from "../../middlewares/require-auth";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { Product, ProductDoc } from "../../models/product";
import { BadRequestError } from "../../errors/bad-request-error";
import { IkonkaProduct } from "../../models/ikonkaProduct";

const router = express.Router();
//localhost:5173/app/chat

http: router.post(
  "/api/product/apply-pending-changes",
  requireAuth,
  [
    // body("name").not().isEmpty().withMessage("Name is required"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    // w aplikacji moge zrobic update produktu ale nie zostane one wprowadzone na produkcje zanim nie zostanie wywolany ten endpoint
    // sam update produktu nie mial by sensu gdyz trzeba by bylo za kazdym razem wywolywac build frontu sklepu
    //- najpierw zbieramy wszyskie zmiany a nastepnie aplikujemy je i przebudowujemy front

    //check if product already exists

    const response: ResponseType<{}> = {
      status: "success",
      code: 201,
      message: "Products changes applied  successfully",
      data: {},
    };

    res.status(201).send(response);
  }
);

export { router as applyPendingChangesRouter };
