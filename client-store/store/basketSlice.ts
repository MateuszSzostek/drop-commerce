import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, ValidationErrorsResponse } from "./const";

const BASE_BASKET_API_URL = `${BASE_API_URL}api/category/`;

interface AddToBasketRequest {
  ownerId: string;
  productId: string;
}

interface AddToBasketResponse {}

interface RemoveFromBasketRequest {
  ownerId: string;
  productId: string;
}

interface RemoveFromBasketResponse {}
export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_BASKET_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addToBasket: builder.mutation<AddToBasketResponse, AddToBasketRequest>({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: AddToBasketResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    removeFromBasket: builder.mutation<
      RemoveFromBasketResponse,
      RemoveFromBasketRequest
    >({
      query: (payload) => ({
        url: `/`,
        method: "POST",
        body: payload,
      }),
      transformResponse: (response: RemoveFromBasketResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const { useAddToBasketMutation, useRemoveFromBasketMutation } =
  basketApi;
