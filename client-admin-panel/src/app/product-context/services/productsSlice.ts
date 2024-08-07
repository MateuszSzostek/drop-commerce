import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddProductRequest,
  AddProductResponse,
  ApplyPendingChangesRequest,
  ApplyPendingChangesResponse,
  CheckForUpdatesRequest,
  CheckForUpdatesResponse,
  DeleteProductRequest,
  DeleteProductResponse,
  GetProductRequest,
  GetProductResponse,
  GetProductsRequest,
  GetProductsResponse,
  UpdateProductRequest,
  UpdateProductResponse,
} from "../domain/products-context";
import { BASE_PRODUCT_URL } from "../domain/products-context";
import { ValidationErrorsResponse } from "../../../common/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_PRODUCT_URL,
    credentials: "include",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    addProduct: builder.mutation<AddProductResponse, AddProductRequest>({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Products"],
      transformResponse: (response: AddProductResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    applyPendingChanges: builder.query<
      ApplyPendingChangesResponse,
      ApplyPendingChangesRequest
    >({
      query: () => ({
        url: `/apply-pending-changes`,
        method: "GET",
      }),
      transformResponse: (response: ApplyPendingChangesResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    checkForUpdates: builder.query<
      CheckForUpdatesResponse,
      CheckForUpdatesRequest
    >({
      query: () => ({
        url: `/apply-pending-changes`,
        method: "GET",
      }),
      transformResponse: (response: CheckForUpdatesResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    deleteProduct: builder.mutation<
      DeleteProductResponse,
      DeleteProductRequest
    >({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: DeleteProductResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getProducts: builder.query<GetProductsResponse, GetProductsRequest>({
      query: () => ({
        url: `/get-all?page=0&limit=1000`,
        method: "GET",
      }),
      providesTags: ["Products"],
      transformResponse: (response: GetProductsResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getProduct: builder.query<GetProductResponse, GetProductRequest>({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "GET",
      }),
      transformResponse: (response: GetProductResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    updateProduct: builder.mutation<
      UpdateProductResponse,
      UpdateProductRequest
    >({
      query: ({ id }) => ({
        url: `/${id}`,
        method: "PUT",
      }),
      transformResponse: (response: UpdateProductResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const {
  useAddProductMutation,
  useApplyPendingChangesQuery,
  useCheckForUpdatesQuery,
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useLazyApplyPendingChangesQuery,
  useLazyCheckForUpdatesQuery,
  useLazyGetProductsQuery,
  useLazyGetProductQuery,
  useUpdateProductMutation,
} = productsApi;
