import express, { Request, Response } from "express";
import { validateRequest } from "../../middlewares/validate-request";
import { ResponseType } from "../../services/response";
import { requireAuth } from "../../middlewares/require-auth";
import { BadRequestError } from "../../errors/bad-request-error";
import { InvoiceData, InvoiceDataDoc } from "../../models/invoiceData";

const router = express.Router();

router.get(
  "/api/invoice-data/customer-get-all-invoice-data",
  requireAuth,
  validateRequest,
  async (req: Request, res: Response) => {
    const { userId } = req.body;

    const existingInvoiceData = await InvoiceData.find({
      ownerId: userId,
    });

    if (!existingInvoiceData) {
      throw new BadRequestError([
        {
          field: "invoiceDataId",
          message: "Invoice data not found",
        },
      ]);
    }

    const response: ResponseType<InvoiceDataDoc[]> = {
      status: "success",
      code: 200,
      message: "All invoice data of user returned successfully!",
      data: existingInvoiceData,
    };

    res.status(200).send(response);
  }
);

export { router as customerGetAllInvoiceData };
