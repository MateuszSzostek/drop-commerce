import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import { BadRequestError } from "../../errors/bad-request-error";
import { InvoiceData, InvoiceDataDoc } from "../../models/invoiceData";

const router = express.Router();

router.delete(
  "/api/invoice-data/customer-delete-invoice-data",
  requireAuth,
  [body("invoiceDataId").notEmpty().withMessage("invoiceDataId must exist")],
  validateRequest,
  async (req: Request, res: Response) => {
    const { invoiceDataId, userId } = req.body;

    const existingInvoiceData = await InvoiceData.findOne({
      ownerId: userId,
      id: invoiceDataId,
    });

    if (!existingInvoiceData) {
      throw new BadRequestError([
        {
          field: "invoiceDataId",
          message: "Invoice data not found",
        },
      ]);
    }

    await existingInvoiceData.delete();

    const response: ResponseType<InvoiceDataDoc> = {
      status: "success",
      code: 201,
      message: "Invoice data deleted successfully!",
      data: existingInvoiceData,
    };

    res.status(201).send(response);
  }
);

export { router as customerDeleteInvoiceData };
