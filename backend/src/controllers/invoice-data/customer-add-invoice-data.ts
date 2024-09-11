import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import { InvoiceData, InvoiceDataDoc } from "../../models/invoiceData";

const router = express.Router();

router.post(
  "/api/invoice-data/customer-add-invoice-data",
  requireAuth,
  [
    body("name").isEmail().withMessage("name must exist"),
    body("surname").isEmail().withMessage("Surname must exist"),
    body("place").isEmail().withMessage("place must exist"),
    body("streetName").isEmail().withMessage("street must exist"),
    body("streetNumber").isEmail().withMessage("streetNumber must exist"),
    body("post").isEmail().withMessage("post must exist"),
    body("postCode").isEmail().withMessage("postCoode must exist"),
    body("taxIdentificationNumber").isEmail().withMessage("Surname must exist"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      userId,
      name,
      surname,
      place,
      streetName,
      streetNumber,
      post,
      postCode,
      taxIdentificationNumber,
    } = req.body;

    const newInvoiceData = await InvoiceData.build({
      ownerId: userId,
      name,
      surname,
      place,
      streetName,
      streetNumber,
      post,
      postCode,
      taxIdentificationNumber,
    });

    await newInvoiceData.save();

    const response: ResponseType<InvoiceDataDoc> = {
      status: "success",
      code: 201,
      message: "New invoice data added successfully",
      data: newInvoiceData,
    };

    res.status(201).send(response);
  }
);

export { router as customerAddInvoiceData };
