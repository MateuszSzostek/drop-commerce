import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, ValidationErrorsResponse } from "./const";

const BASE_INVOICE_DATA_API_URL = `${BASE_API_URL}api/invoice-data/`;

interface InvoiceData {
  name: string;
  surname: string;
  place: string;
  streetName: string;
  streetNumber: string;
  post: string;
  postCode: string;
  taxIdentificationNumber: string;
}

interface AddInvoiceDataRequest extends InvoiceData {}
interface AddInvoiceDataResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface RemoveInvoiceDataRequest {
  invoiceDataId: string;
}
interface RemoveInvoiceDataResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface EditInvoiceDataRequest extends InvoiceData {
  invoiceDataId: string;
}
interface EditInvoiceDataResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface GetInvoiceDataRequest {
  invoiceDataId: string;
}
interface GetInvoiceDataResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

interface GetAllInvoiceDataRequest {}
interface GetAllInvoiceDataResponse {
  status: "success" | "error";
  code: number;
  message: string;
  data: {};
}

export const invoiceDataApi = createApi({
  reducerPath: "invoiceDataApi",
  tagTypes: ["InvoiceData"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_INVOICE_DATA_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addInvoiceData: builder.mutation<
      AddInvoiceDataResponse,
      AddInvoiceDataRequest
    >({
      query: (payload) => ({
        url: `/customer-add-invoice-data`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["InvoiceData"],
      transformResponse: (response: AddInvoiceDataResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    removeInvoiceData: builder.mutation<
      RemoveInvoiceDataResponse,
      RemoveInvoiceDataRequest
    >({
      query: (payload) => ({
        url: `/customer-delete-invoice-data`,
        method: "DELETE",
        body: payload,
      }),
      invalidatesTags: ["InvoiceData"],
      transformResponse: (response: RemoveInvoiceDataResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    editInvoiceData: builder.mutation<
      EditInvoiceDataResponse,
      EditInvoiceDataRequest
    >({
      query: (payload) => ({
        url: `/customer-edit-invoice-data`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["InvoiceData"],
      transformResponse: (response: EditInvoiceDataResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    getInvoiceData: builder.query<
      GetInvoiceDataResponse,
      GetInvoiceDataRequest
    >({
      query: (payload) => ({
        url: `/customer-get-invoice-data`,
        method: "GET",
        body: payload,
      }),
      providesTags: ["InvoiceData"],
      transformResponse: (response: GetInvoiceDataResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),

    getAllInvoiceData: builder.query<
      GetAllInvoiceDataResponse,
      GetAllInvoiceDataRequest
    >({
      query: (payload) => ({
        url: `/customer-get-all-invoice-data`,
        method: "GET",
        body: payload,
      }),
      providesTags: ["InvoiceData"],
      transformResponse: (response: GetAllInvoiceDataResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const {
  useAddInvoiceDataMutation,
  useEditInvoiceDataMutation,
  useGetAllInvoiceDataQuery,
  useGetInvoiceDataQuery,
  useLazyGetAllInvoiceDataQuery,
  useLazyGetInvoiceDataQuery,
  useRemoveInvoiceDataMutation,
} = invoiceDataApi;
