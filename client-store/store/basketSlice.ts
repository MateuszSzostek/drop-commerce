import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, ValidationErrorsResponse } from "./const";

const BASE_BASKET_API_URL = `${BASE_API_URL}api/basket/`;

interface AddToBasketRequest {
  providerIdentifier: string;
}

interface AddToBasketResponse {}

interface RemoveFromBasketRequest {
  providerIdentifier: string;
}

interface GetBasketResponse {}

interface GetBasketRequest {}

interface RemoveFromBasketResponse {}
export const basketApi = createApi({
  reducerPath: "basketApi",
  tagTypes: ["Basket"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_BASKET_API_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addToBasket: builder.mutation<AddToBasketResponse, AddToBasketRequest>({
      query: (payload) => ({
        url: `/add-to-basket`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Basket"],
      transformResponse: (response: AddToBasketResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    removeFromBasket: builder.mutation<
      RemoveFromBasketResponse,
      RemoveFromBasketRequest
    >({
      query: (payload) => ({
        url: `/remove-from-basket`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Basket"],
      transformResponse: (response: RemoveFromBasketResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
    getBasket: builder.query<GetBasketResponse, GetBasketRequest>({
      query: () => ({
        url: `/get-basket`,
        method: "GET",
      }),
      providesTags: ["Basket"],
      transformResponse: (response: GetBasketResponse) => response,
      transformErrorResponse: (response: ValidationErrorsResponse) => response,
    }),
  }),
});

export const {
  useAddToBasketMutation,
  useRemoveFromBasketMutation,
  useGetBasketQuery,
} = basketApi;
