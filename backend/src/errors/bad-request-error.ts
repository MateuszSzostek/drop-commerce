import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";
import { RequestError } from "../types";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public errors: RequestError[]) {
    super("Bad request error");

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.message, field: err.field };
    });
  }
}
