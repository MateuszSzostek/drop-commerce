import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  FetchAllIkonkaProductsRequest,
  FetchAllIkonkaProductsResponse,
  GetIkonkaProductRequest,
  GetIkonkaProductResponse,
  GetIkonkaProductsRequest,
  GetIkonkaProductsResponse,
} from "../domain/products-context"
import { BASE_IKONKA_URL } from "../domain/products-context"
import { ValidationErrorsResponse } from "../../../common/types"

export const ikonkaApi = createApi({
  reducerPath: "ikonkaApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_IKONKA_URL, credentials: "include" }),
  endpoints: (builder) => ({
    fetchAllIkonkaProducts: builder.query<FetchAllIkonkaProductsResponse, FetchAllIkonkaProductsRequest>({
      query: () => ({
        url: `fetch-all-ikonka-products`,
        method: "GET",
      }),
      transformResponse: (response: FetchAllIkonkaProductsResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getIkonkaProducts: builder.query<GetIkonkaProductsResponse, GetIkonkaProductsRequest>({
      query: (payload) => ({
        url: `get-products`,
        method: "GET",
        params: payload,
      }),
      transformResponse: (response: GetIkonkaProductsResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getIkonkProduct: builder.query<GetIkonkaProductResponse, GetIkonkaProductRequest>({
      query: ({ id }) => ({
        url: `get-product/${id}`,
        method: "GET",
      }),
      transformResponse: (response: GetIkonkaProductResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
})

export const { useLazyFetchAllIkonkaProductsQuery, useLazyGetIkonkaProductsQuery, useLazyGetIkonkProductQuery } = ikonkaApi
