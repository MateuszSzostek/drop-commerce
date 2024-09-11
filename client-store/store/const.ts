export const BASE_API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import translations from "@/translations/translations.pl";

export type ValidationError = {
  field: string;
  message: string;
};

export type Response<T> =
  | { data: T }
  | { error: FetchBaseQueryError | SerializedError | ValidationErrorsResponse };

export type ValidationErrorsResponse = ValidationErrors | FetchBaseQueryError;

export type ValidationErrors = {
  data: {
    errors: ValidationError[];
  };
  status: string | number;
};

export type ParsedValidationErrors = {
  [key: string]: string;
};
export type SelectOptions = {
  value: string;
  label: string;
}[];

export type PaginatedItems<T> = {
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: T[];
};

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function transformErrors(errors: ValidationErrors): ValidationErrors {
  const validationErrors = errors?.data.errors.reduce((acc, error) => {
    return {
      ...acc,
      [error.field]: error.message,
    };
  }, {});
  return validationErrors;
}

export function parseErrors(
  transformedErrors: ValidationErrors
): ParsedValidationErrors {
  const parsedErrors: ParsedValidationErrors = Object.keys(
    transformedErrors
  ).reduce((acc, key: string) => {
    const error: string[] = transformedErrors[key] as string[];
    const parsedError: string[] = error.map((error: string) => {
      return translations[`error-code`][key][error];
    });

    return {
      ...acc,
      [key]: parsedError.join(",\n "),
    };
  }, {});
  return parsedErrors;
}

export function getErrors(errors: ValidationErrors): ParsedValidationErrors {
  const validationErrors: {} = errors?.data.errors.reduce((acc, error) => {
    return {
      ...acc,
      [error.field]: translations[`error-code`][error.field][error.message],
    };
  }, {});

  //  console.log(validationErrors);
  return validationErrors;
}
