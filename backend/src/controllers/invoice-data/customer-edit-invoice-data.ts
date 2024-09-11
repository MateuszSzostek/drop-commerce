import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import { BadRequestError } from "../../errors/bad-request-error";
import { InvoiceData, InvoiceDataDoc } from "../../models/invoiceData";

const router = express.Router();

router.post(
  "/api/invoice-data/customer-edit-invoice-data",
  requireAuth,
  [
    body("invoiceDataId").notEmpty().withMessage("invoiceDataId must exist"),
    body("name").notEmpty().withMessage("name must exist"),
    body("surname").notEmpty().withMessage("Surname must exist"),
    body("place").notEmpty().withMessage("place must exist"),
    body("streetName").notEmpty().withMessage("street must exist"),
    body("streetNumber").notEmpty().withMessage("streetNumber must exist"),
    body("post").notEmpty().withMessage("post must exist"),
    body("postCode").notEmpty().withMessage("postCoode must exist"),
    body("surname").notEmpty().withMessage("Surname must exist"),
    body("taxIdentificationNumber")
      .notEmpty()
      .withMessage("taxIdentificationNumber"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      invoiceDataId,
      name,
      surname,
      place,
      streetName,
      streetNumber,
      post,
      postCode,
      taxIdentificationNumber,
    } = req.body;

    const existingInvoiceData = await InvoiceData.findOne({
      id: invoiceDataId,
    });

    if (!existingInvoiceData) {
      throw new BadRequestError([
        {
          field: " invoiceDataId",
          message: "Invoice data not found",
        },
      ]);
    }

    existingInvoiceData.name = name;
    existingInvoiceData.surname = surname;
    existingInvoiceData.place = place;
    existingInvoiceData.streetName = streetName;
    existingInvoiceData.streetNumber = streetNumber;
    existingInvoiceData.post = post;
    existingInvoiceData.postCode = postCode;
    existingInvoiceData.taxIdentificationNumber = taxIdentificationNumber;

    await existingInvoiceData.save();

    const response: ResponseType<InvoiceDataDoc> = {
      status: "success",
      code: 200,
      message: "Delivery address has been edited successfully",
      data: existingInvoiceData,
    };

    res.status(201).send(response);
  }
);

export { router as customerEditInvoiceData };
